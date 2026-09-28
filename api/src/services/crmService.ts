import { LeadData } from './leadService.js';

import {
    CRMProvider,
    CRMResponse
} from './crmProvider.js';

class MockCRMProvider implements CRMProvider {

    sendLead(
        lead: LeadData
    ): CRMResponse {

        console.log(
            'Sending lead to mock CRM:',
            lead
        );

        const externalId =
            `crm-${Date.now()}`;

        return {
            success: true,
            provider: 'mock-crm',
            externalId
        };
    }
}

const crmProvider =
    new MockCRMProvider();

export function sendLeadToCRM(
    lead: LeadData
): CRMResponse {

    return crmProvider.sendLead(lead);

}