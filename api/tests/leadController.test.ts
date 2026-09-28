import { describe, expect, it, vi } from 'vitest';

import { createLead } from '../src/controllers/leadController.js';

describe('createLead', () => {

    it('should return 400 when required fields are missing', () => {

        const req = {
            body: {
                name: 'John Doe',
                email: 'john@example.com'
            }
        } as any;

        const json = vi.fn();

        const res = {
            status: vi.fn().mockReturnValue({
                json
            })
        } as any;

        createLead(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(json).toHaveBeenCalledWith({
            success: false,
            message:
                'Name, email and message are required.'
        });

    });

    it('should create a lead successfully', () => {

    const req = {
        body: {
            name: 'John Doe',
            email: 'john@example.com',
            company: 'Example Corp',
            message: 'I need a new website.'
        }
    } as any;

    const json = vi.fn();

    const res = {
        status: vi.fn().mockReturnValue({
            json
        })
    } as any;

    createLead(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(json).toHaveBeenCalledWith(
        expect.objectContaining({
            success: true,
            message: 'Lead received successfully.'
        })
    );

});

});