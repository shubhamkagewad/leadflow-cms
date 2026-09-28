export interface NewsletterData {
    email: string;
}


export interface NewsletterResponse {
    success: boolean;
    provider: string;
    externalId: string;
}


export function subscribeToNewsletter(
    data: NewsletterData
): NewsletterResponse {

    console.log(
        'Subscribing email to newsletter:',
        data.email
    );


    const externalId =
        `subscriber-${Date.now()}`;


    return {
        success: true,
        provider: 'mock-mailchimp',
        externalId
    };

}