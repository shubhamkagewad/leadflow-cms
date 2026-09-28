import { LeadData } from './leadService.js';

export interface CRMResponse {
    success: boolean;
    provider: string;
    externalId: string;
}

export interface CRMProvider {
    sendLead(lead: LeadData): CRMResponse;
}