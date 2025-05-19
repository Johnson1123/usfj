// pages/api/webhook.js

import sendEmail from '@/utils/email';
import { buffer } from 'micro';
import Stripe from 'stripe';

// Ensure the key is kept out of any version control system you might be using.
const stripe = Stripe(process.env.STRIPE_KEY);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.SESSION_COMPLETED;

export const config = {
    api: {
        bodyParser: false, // Need raw body for webhook signature verification
    },
};

export default async function webhookHandler(req, res) {
    if (req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature'];

        let event;

        try {
            event = stripe.webhooks.constructEvent(
                buf.toString(),
                sig,
                endpointSecret,
            );
            const email = event.data.object.metadata.email;
            if (email) {
                const subject = 'Checkout Session Completed';
                const body = `Your checkout session has been completed successfully. Your order is being processed.`;
                // Assuming there's a function to send emails
                sendEmail(
                    {
                        name: 'Kaltech Contact Form',
                        address: 'usfj_auth@kaltechconsultancy.tech',
                    },
                    { email: email, name: 'admin' },
                    'subject',
                    'Order complete',
                );
                receipients, message, subject;
            }
        } catch (err) {
            console.log(`Webhook Error: ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const checkoutSessionCompleted = event.data.object;
                // Then define and call a function to handle the event checkout.session.completed
                console.log(
                    'Checkout Session Completed:',
                    checkoutSessionCompleted,
                );
                // You might want to update your database, fulfill the order,
                // send emails, etc., based on the session details.
                break;
            // ... handle other event types
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 response to acknowledge receipt of the event
        res.status(200).send('Webhook received');
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
