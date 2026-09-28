export interface WordPressService {
    id: number;
    date: string;
    slug: string;
    link: string;

    title: {
        rendered: string;
    };

    content: {
        rendered: string;
    };

    featured_media: number;
}

const WORDPRESS_API_URL =
    process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {

    throw new Error(
        'WORDPRESS_API_URL is not configured.'
    );

}

export async function getWordPressServices() {

    const response = await fetch(
        `${WORDPRESS_API_URL}/service?per_page=3`
    );

    if (!response.ok) {

        throw new Error(
            `WordPress API request failed: ${response.status}`
        );

    }

    const services =
        await response.json();

    return services as WordPressService[];
}