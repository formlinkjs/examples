import cors from 'cors';
import express from 'express';
import { log } from 'console';

const app = express();

app.use(cors());
app.use(express.json());

app.put('/api/users/1', async (req, res) => res.json({ message: 'Ok' }));

app.get('/api/users/1', async (req, res) => (
    res.json({
        firstName: 'Jane',
        lastName: 'Smith',
        username: 'janesmith',
        about: 'I love to travel and take photos.',
        email: 'james@silverman.com',
        'street': '123 Main St.',
        city: 'Anytown',
        region: 'CA',
        country: 'United Kingdom',
        'postalcode': '12345',
        comment: false,
        candidates: true,
        offers: true,
        pushNotifications: 'everything',
    })
));

const server = app.listen(
    3000,
    () => log(`🚀 Server ready at: http://localhost:3000`)
);
