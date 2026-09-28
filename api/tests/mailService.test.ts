import { describe, expect, it } from 'vitest';

import {
    subscribeToNewsletter
} from '../src/services/mailService.js';

describe('subscribeToNewsletter', () => {

    it('should subscribe an email successfully', () => {

        const newsletterData = {
            email: 'john@example.com'
        };

        const result =
            subscribeToNewsletter(
                newsletterData
            );

        expect(result.success).toBe(true);

        expect(result.provider).toBe(
            'mock-mailchimp'
        );

        expect(result.externalId).toMatch(
            /^subscriber-/
        );

    });

});