import express from 'express';
import { tempRouter } from './routes/temp.route.js';

const app = express();
const port = 3000;

app.use('/temp', tempRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});