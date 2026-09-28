import { Request, Response } from 'express';

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
        message
    } = req.body;


    if (!name || !email || !message) {

        return res.status(400).json({

            success: false,

            message:
                'Name, email and message are required.'

        });

    }


    const lead: LeadData = {

        name: name.trim(),

        email: email.trim(),

        company: company
            ? company.trim()
            : undefined,

        message: message.trim()

    };


    const processedLead =
        processLead(lead);


    return res.status(201).json({

        success: true,

        message: 'Lead received successfully.',

        data: processedLead

    });

}