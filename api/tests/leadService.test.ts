import { describe, expect, it } from 'vitest';

import { processLead } from '../src/services/leadService.js';

describe('processLead', () => {

    it('should process a lead successfully', () => {

        const lead = {
            name: 'John Doe',
            email: 'john@example.com',
            company: 'Example Corp',
            message: 'I need a new website.'
        };

        const result = processLead(lead);

        expect(result.name).toBe('John Doe');
        expect(result.email).toBe('john@example.com');
        expect(result.company).toBe('Example Corp');
        expect(result.message).toBe(
            'I need a new website.'
        );

        expect(result.status).toBe('received');

        expect(result.crm.success).toBe(true);
        expect(result.crm.provider).toBe('mock-crm');

    });

});