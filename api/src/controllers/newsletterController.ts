import {
    Request,
    Response
} from 'express';

import {
    subscribeToNewsletter
} from '../services/mailService.js';

import {
    NewsletterData
} from '../services/mailProvider.js';


export function subscribeNewsletter(
    req: Request,
    res: Response
) {

    const {
        email
    } = req.body;


    if (!email) {

        return res.status(400).json({

            success: false,

            message:
                'Email is required.'

        });

    }


    const newsletterData: NewsletterData = {

        email: email.trim()

    };


    const result =
        subscribeToNewsletter(
            newsletterData
        );


    return res.status(201).json({

        success: true,

        message:
            'Newsletter subscription successful.',

        data: result

    });

}