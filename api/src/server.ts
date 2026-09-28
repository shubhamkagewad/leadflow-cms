import express from 'express';

import leadRoutes from './routes/leadRoutes.js';


const app = express();

const PORT = 3000;


app.use(express.json());


app.get('/api/health', (_req, res) => {

    res.json({
        success: true,
        message: 'LeadFlow API is running'
    });

});


app.use('/api', leadRoutes);


app.listen(PORT, () => {

    console.log(
        `LeadFlow API running at http://localhost:${PORT}`
    );

});