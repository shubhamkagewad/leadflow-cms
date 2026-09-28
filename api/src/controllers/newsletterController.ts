import {
    Request,
    Response
} from 'express';
import {
    isNonEmptyString,
    isValidEmail
} from '../utils/validation.js';
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


    if (!isNonEmptyString(email)) {

    return res.status(400).json({

        success: false,

        message:
            'Email is required.'

    });

}


if (!isValidEmail(email.trim())) {

    return res.status(400).json({

        success: false,

        message:
            'Please provide a valid email address.'

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