// pages/api/webhook.js

import sendEmail from '@/utils/email';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
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

// Add validation for required environment variables
if (!process.env.STRIPE_KEY) {
    console.error('STRIPE_KEY is not defined in environment variables');
    return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 },
    );
}

if (!endpointSecret) {
    console.error('SESSION_COMPLETED is not defined in environment variables');
    return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 },
    );
}

export async function POST(request) {
    const body = await request.text();

    const headerList = await headers();

    const sig = headerList.get('stripe-signature');
    let event;
    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
        console.error('Error verifying webhook signature:', err);
        return NextResponse.json({ message: err.message });
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            // Handle successful payment

            const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p>Hi <strong>${event.data.object.customer_details.name}</strong> </p>
            <p>Thank you for your recent purchase from USFJ! We've received your order and are now preparing it for shipment.</p>
            <p><strong>Order Details</strong></p>
            <p><strong>Amount</strong></p>
            <p><strong>Sub_Total: </strong>${event.data.object.amount_subtotal}</p>
            <p><strong>Total:</strong>${event.data.object.amount_total}</p>

            <p><strong>Address</strong></p>
            <p><strong>Country: </strong> ${event.data.object.customer_details?.address.country}</p>
            <p><strong>State:</strong> ${event.data.object.customer_details?.address.state}</p>
            <p><strong>Street: </strong>${event.data.object.customer_details?.address.line1}</p>
            <p><strong>Zipcode:</strong>${event.data.object.customer_details?.address.postal_code}</p>
            
          
        `;

            const data = {
                sender: {
                    name: 'Kaltech Contact Form',
                    address: 'usfj_auth@kaltechconsultancy.tech',
                },
                receipients: [
                    {
                        address: event.data.object.customer_details.email,
                        name: event.data.object.customer_details.name,
                    },
                ],
                message: emailContent,
                subject: `Great News! Your USFJ Order is Confirmed!`,
            };

            await sendEmail(data);
            console.log('Payment successful', event);
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }
    return NextResponse.json({ received: true }, { status: 200 });
}
