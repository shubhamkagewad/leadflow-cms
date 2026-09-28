import express from 'express';
import cors from 'cors';

import leadRoutes from './routes/leadRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get('/api/health', (_req, res) => {

    res.json({
        success: true,
        message: 'LeadFlow API is running'
    });

});


app.use('/api', leadRoutes);
app.use('/api', newsletterRoutes);


app.listen(PORT, () => {

    console.log(
        `LeadFlow API running at http://localhost:${PORT}`
    );

});