/**
 * @jest-environment node
 */
import { GET } from '@/app/api/ping/route';
import { NextRequest } from 'next/server';

describe('API Ping/Health Endpoint (Integración)', () => {
    it('debe devolver 200 y mensaje pong', async () => {
        const req = new NextRequest(new URL('http://localhost/api/ping'));
        const res = await GET();

        expect(res.status).toBe(200);
        const json = await res.json();
        expect(json.message).toBe('pong');
        expect(json.status).toBe('ok');
        expect(json).toHaveProperty('timestamp');
    });
});
