export interface NewsletterData {
    email: string;
}

export interface NewsletterResponse {
    success: boolean;
    provider: string;
    externalId: string;
}

export interface MailProvider {
    subscribe(
        data: NewsletterData
    ): NewsletterResponse;
}