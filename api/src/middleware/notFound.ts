import {
    NextFunction,
    Request,
    Response
} from 'express';

export function notFoundHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {

    if (req.path.startsWith('/api')) {

        res.status(404).json({

            success: false,

            message:
                `Route not found: ${req.method} ${req.path}`

        });

        return;
    }

    next();

}