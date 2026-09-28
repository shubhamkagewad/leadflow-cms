import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import leadRoutes from './routes/leadRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import wordpressRoutes from './routes/wordpressRoutes.js';

import {
    notFoundHandler
} from './middleware/notFound.js';

import {
    errorHandler
} from './middleware/errorHandler.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/health', (_req, res) => {

    res.status(200).json({

        success: true,

        status: 'healthy',

        service: 'LeadFlow API',

        version: '1.0.0',

        environment:
            process.env.NODE_ENV || 'development',

        timestamp:
            new Date().toISOString()

    });

});

app.use('/api', leadRoutes);

app.use('/api', newsletterRoutes);

app.use('/api', wordpressRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;