import { LeadData } from './leadService.js';


export interface CRMResponse {
    success: boolean;
    provider: string;
    externalId: string;
}


export function sendLeadToCRM(
    lead: LeadData
): CRMResponse {

    console.log('Sending lead to CRM:', lead);


    const externalId =
        `crm-${Date.now()}`;


    return {
        success: true,
        provider: 'mock-crm',
        externalId
    };

}