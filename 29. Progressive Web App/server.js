const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: path.join(__dirname, 'config.env') });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
// Routes
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            return res.status(500).send({
                error: stripeErr,
            });
        }
        res.status(200).send({
            success: stripeRes,
        });
    });
});
// Server
app.listen(port, err => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${port}`);
});
