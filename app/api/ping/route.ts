import { NextResponse } from 'next/server';

/**
 * Endpoint de Health Check simple
 * Utilizado para monitorización de uptime y tests de integración básicos de infraestructura.
 */
export async function GET() {
    return NextResponse.json({ message: 'pong', status: 'ok', timestamp: new Date().toISOString() }, { status: 200 });
}
