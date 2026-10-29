import express from 'express'
import db from './db.cjs';

import bodyParser from 'body-parser';

const app = express();
// const db = require('./db');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About Page')
}
)

// Person routes
import personRoutes from './routes/personRoutes.cjs';
app.use('/person', personRoutes);


// Menu routes
import menuRoutes from './routes/menuRoutes.cjs';
app.use('/menu', menuRoutes);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})