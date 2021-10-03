import express from 'express';
import path from 'path';

const app = express();
const HOST = 'localhost';
const __dirname = path.resolve();
const PORT = 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Route to send File
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, (err) => {
    if (err) console.log('An error in server happened');
    console.log(`Listening at port: http://${HOST}:${PORT}`);
});