const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51I4fOsBPF0iSYWicae9u9UTzRIGCoC02vrRGuST76f2abokdI0g1U1q2cSSrkMXPd2qp5DBAfrGp4e78dHEgD51700g9NBtews'
)

// API

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in subunits of the currency
    currency: "usd",
  });

  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-9abf3/us-central1/api