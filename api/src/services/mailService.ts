import {
    MailProvider,
    NewsletterData,
    NewsletterResponse
} from './mailProvider.js';

class MockMailProvider implements MailProvider {

    subscribe(
        data: NewsletterData
    ): NewsletterResponse {

        console.log(
            'Subscribing email to mock Mailchimp:',
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
}

const mailProvider =
    new MockMailProvider();

export function subscribeToNewsletter(
    data: NewsletterData
): NewsletterResponse {

    return mailProvider.subscribe(data);

}