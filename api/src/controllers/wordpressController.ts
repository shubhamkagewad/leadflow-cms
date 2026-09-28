import {
    Request,
    Response
} from 'express';

import {
    getWordPressServices
} from '../services/wordpressService.js';

export async function getServices(
    _req: Request,
    res: Response
) {

    try {

        const services =
            await getWordPressServices();

        return res.status(200).json({

            success: true,

            data: services

        });

    } catch (error) {

        console.error(
            'WordPress API error:',
            error
        );

        return res.status(500).json({

            success: false,

            message:
                'Unable to fetch services from WordPress.'

        });

    }

}