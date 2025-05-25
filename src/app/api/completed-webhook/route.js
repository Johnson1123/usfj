// pages/api/webhook.js

import sendEmail from '@/utils/email';
import { headers } from 'next/headers';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY);
const endpointSecret = process.env.SESSION_COMPLETED;

// Add validation for required environment variables
if (!process.env.STRIPE_KEY) {
    Response.json({ message: 'Server configuration error' }, { status: 500 });
}

if (!endpointSecret) {
    Response.json({ message: 'Server configuration error' }, { status: 500 });
}

export async function POST(req, res) {
    const body = await req.text();

    const headerList = await headers();

    const sig = headerList.get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            // Handle successful payment
            const session = await stripe.checkout.sessions.retrieve(
                event.data.object.id,
                {
                    expand: ['line_items'],
                },
            );

            const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p>Hi <strong>${
                event.data.object.customer_details.name
            }</strong> </p>
            <p>Thank you for your recent purchase from USFJ! We've received your order and are now preparing it for shipment.</p>
            
            <p><strong>Order Details</strong></p>

             ${session.line_items.data
                 .map(
                     (item) => `
                <p><strong>Product Name:</strong> ${item.description}</p>
            `,
                 )
                 .join('')}
    

            ${session.line_items.data
                .map(
                    (item) => `
                <p><strong>Unit Price:</strong> $${(
                    item.price.unit_amount / 100
                ).toFixed(2)}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
               
            `,
                )
                .join('')}

             <hr>

            
            <p><strong>${event.data.object.custom_fields[0]?.key}:</strong>
               ${event.data.object.custom_fields[0]?.dropdown?.value}
           </p>   
            
            <p><strong>Sub_Total: </strong>$${(
                event.data.object.amount_subtotal / 100
            ).toFixed(2)}</p>

            <p><strong>Total:</strong>$${(
                event.data.object.amount_total / 100
            ).toFixed(2)}</p>

            <p><strong>Address</strong></p>
            <p><strong>Country: </strong> ${
                event.data.object.customer_details?.address.country
            }</p>
            <p><strong>State:</strong> ${
                event.data.object.customer_details?.address.state
            }</p>
            <p><strong>Street: </strong>${
                event.data.object.customer_details?.address.line1
            }</p>
            <p><strong>Zipcode:</strong>${
                event.data.object.customer_details?.address.postal_code
            }</p>
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

            break;

        default:
            console.log('Other events');
    }

    return Response.json({ received: true }, { status: 200 });
}
