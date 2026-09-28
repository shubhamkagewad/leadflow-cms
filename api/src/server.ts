import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/api/health', (_req, res) => {

    res.json({
        success: true,
        message: 'LeadFlow API is running'
    });

});


app.listen(PORT, () => {

    console.log(
        `LeadFlow API running at http://localhost:${PORT}`
    );

});