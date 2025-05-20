// pages/api/webhook.js

import sendEmail from '@/utils/email';
// import { buffer } from 'micro';
// import Stripe from 'stripe';

// // Ensure the key is kept out of any version control system you might be using.
// const stripe = Stripe(process.env.STRIPE_KEY);

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = process.env.SESSION_COMPLETED;

// export const config = {
//     api: {
//         bodyParser: false, // Need raw body for webhook signature verification
//     },
// };

// export async function POST(request) {
//     if (req.method === 'POST') {
//         const buf = await buffer(request);
//         const sig = request.headers['stripe-signature'];

//         let event;

//         try {
//             event = stripe.webhooks.constructEvent(
//                 buf.toString(),
//                 sig,
//                 endpointSecret,
//             );
//             // const email = event.data.object.metadata.email;
//             // if (email) {

//             // }
//         } catch (err) {
//             console.log(`Webhook Error: ${err.message}`);
//             return Response.json({
//                 success: false,
//                 message: 'Failed to send email',
//                 error: err.message,
//             });
//         }

//         // Handle the event
//         switch (event.type) {
//             case 'checkout.session.completed':
//                 const checkoutSessionCompleted = event.data.object;
//                 // Then define and call a function to handle the event checkout.session.completed
//                 console.log(
//                     'Checkout Session Completed:',
//                     checkoutSessionCompleted,
//                 );

//                 const subject = 'Checkout Session Completed';
//                 const body = `Your checkout session has been completed successfully. Your order is being processed.`;
//                 // Assuming there's a function to send emails
//                 await sendEmail(
//                     {
//                         name: 'Kaltech Contact Form',
//                         address: 'usfj_auth@kaltechconsultancy.tech',
//                     },
//                     { email: 'onifadejohnson2014@gmail.com', name: 'admin' },
//                     'subject',
//                     'Order complete',
//                 );
//                 // You might want to update your database, fulfill the order,
//                 // send emails, etc., based on the session details.
//                 break;
//             // ... handle other event types
//             default:
//                 console.log(`Unhandled event type ${event.type}`);
//         }

//         // Return a 200 response to acknowledge receipt of the event
//         return Response.json({
//             success: true,
//             message: 'good',
//             error: 'Email failed',
//         });
//     } else {
//         Response.setHeader('Allow', ['POST']);
//         return Response.json({
//             success: false,
//             message: 'Failed to send email',
//             error: 'Resquest method not allow',
//         });
//     }
// }

// pages/api/webhook/stripe.ts
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY);
const endpointSecret = process.env.SESSION_COMPLETED;
export default async function POST(req, res) {
    // if (req.method !== 'POST') {
    //     res.setHeader('Allow', ['POST']);
    //     return res.status(405).end('Method Not Allowed');
    // }

    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Error verifying webhook signature:', err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            // Handle successful payment
            await sendEmail(
                {
                    name: 'Kaltech Contact Form',
                    address: 'usfj_auth@kaltechconsultancy.tech',
                },
                { email: 'onifadejohnson2014@gmail.com', name: 'admin' },
                'subject',
                'Order complete',
            );
            break;
        case 'invoice.payment_succeeded':
            // Handle successful subscription payment
            break;
        // Add more cases for other event types you want to handle
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }
    res.status(200).json({ received: true });
}
export const config = {
    api: {
        bodyParser: false,
    },
};
