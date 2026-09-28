import { Request, Response } from 'express';

export function createLead(req: Request, res: Response) {

    const {
        name,
        email,
        company,
        message
    } = req.body;


    if (!name || !email || !message) {

        return res.status(400).json({
            success: false,
            message: 'Name, email and message are required.'
        });

    }


    console.log('New lead received:', {
        name,
        email,
        company,
        message
    });


    return res.status(201).json({
        success: true,
        message: 'Lead received successfully.'
    });

}