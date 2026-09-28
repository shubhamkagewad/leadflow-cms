import {
    describe,
    expect,
    it
} from 'vitest';

import request from 'supertest';

import app from '../src/app.js';


describe('GET /api/health', () => {

    it('should return a healthy API response', async () => {

        const response =
            await request(app)
                .get('/api/health');

        expect(response.status).toBe(200);

        expect(response.body.success)
            .toBe(true);

        expect(response.body.status)
            .toBe('healthy');

        expect(response.body.service)
            .toBe('LeadFlow API');

        expect(response.body.version)
            .toBe('1.0.0');

        expect(response.body.environment)
            .toBe('test');

        expect(response.body.timestamp)
            .toBeDefined();

    });

});