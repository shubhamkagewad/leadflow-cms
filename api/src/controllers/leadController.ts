import { Request, Response } from 'express';
import {
    isNonEmptyString,
    isValidEmail
} from '../utils/validation.js';
import {
    LeadData,
    processLead
} from '../services/leadService.js';


export function createLead(
    req: Request,
    res: Response
) {

    const {
        name,
        email,
        company,
        message,
        utm_source,
    utm_medium,
    utm_campaign
    } = req.body;


    if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
) {

    return res.status(400).json({

        success: false,

        message:
            'Name, email and message are required.'

    });

}


if (!isValidEmail(email.trim())) {

    return res.status(400).json({

        success: false,

        message:
            'Please provide a valid email address.'

    });

}


    const lead: LeadData = {

        name: name.trim(),

        email: email.trim(),

        company: company
            ? company.trim()
            : undefined,

        message: message.trim(),
utm_source:
        typeof utm_source === 'string'
            ? utm_source.trim()
            : undefined,

    utm_medium:
        typeof utm_medium === 'string'
            ? utm_medium.trim()
            : undefined,

    utm_campaign:
        typeof utm_campaign === 'string'
            ? utm_campaign.trim()
            : undefined
    };


    const processedLead =
        processLead(lead);


    return res.status(201).json({

        success: true,

        message: 'Lead received successfully.',

        data: processedLead

    });

}