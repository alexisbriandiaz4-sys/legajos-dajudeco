import crypto from 'crypto';

/**
 * Módulo Criptográfico para Encriptación a Nivel de Aplicación (Base de Datos)
 * Utiliza un algoritmo simétrico robusto (AES-256-GCM) y un modelo determinístico 
 * de ser necesario, o estático con IV para mayor seguridad.
 */

// Usamos el JWT_SECRET como derivación de llave si una llave específica no fue declarada.
const ENCRYPTION_KEY = process.env.DB_ENCRYPTION_KEY || process.env.JWT_SECRET?.substring(0, 32) || '12345678901234567890123456789012';
const ALGORITHM = 'aes-256-gcm';

if (ENCRYPTION_KEY.length !== 32) {
    console.warn("La llave de encriptación no tiene 32 bytes de largo. Esto puede causar fallos de seguridad o encriptación.");
}

/**
 * Encripta un string plano retornando el vector ensamblado `<iv>:<authTag>:<encrypted>`
 */
export function encryptField(text: string | null | undefined): string | null {
    if (!text) return text as null;
    try {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);
        
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag().toString('hex');
        return `${iv.toString('hex')}:${authTag}:${encrypted}`;
    } catch (e) {
        console.error("Error encriptando campo:", e);
        return text; // Fallback
    }
}

/**
 * Desencripta un string en formato `<iv>:<authTag>:<encrypted>`
 */
export function decryptField(text: string | null | undefined): string | null {
    if (!text || !text.includes(':')) return text as null; // Si no está encriptado con nuestro formato, se devuelve el texto raw
    try {
        const parts = text.split(':');
        if (parts.length !== 3) return text;

        const iv = Buffer.from(parts[0], 'hex');
        const authTag = Buffer.from(parts[1], 'hex');
        const encryptedText = Buffer.from(parts[2], 'hex');

        const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);
        decipher.setAuthTag(authTag);

        let decrypted = decipher.update(encryptedText, undefined, 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
    } catch (e) {
        console.error("Error desencriptando campo:", e);
        return text; // Return encrypted (or corrupted) if failure occurs. (Prevents app crashing immediately)
    }
}
