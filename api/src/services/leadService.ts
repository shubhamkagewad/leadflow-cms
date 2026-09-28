import {
    sendLeadToCRM
} from './crmService.js';


export interface LeadData {
    name: string;
    email: string;
    company?: string;
    message: string;
    utm_source?: string;
utm_medium?: string;
utm_campaign?: string;
}


export function processLead(
    lead: LeadData
) {

    console.log(
        'Processing lead:',
        lead
    );


    const crmResponse =
        sendLeadToCRM(lead);


    return {
        id: `lead-${Date.now()}`,

        ...lead,

        status: 'received',

        crm: crmResponse
    };

}