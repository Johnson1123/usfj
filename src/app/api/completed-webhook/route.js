// pages/api/webhook.js

import sendEmail from '@/utils/email';
import { headers } from 'next/headers';
import Stripe from 'stripe';

export async function POST(req, res) {
    // Validate environment variables
    if (!process.env.STRIPE_KEY) {
        return Response.json(
            { message: 'Stripe key is not configured' },
            { status: 500 },
        );
    }

    if (!process.env.SESSION_COMPLETED) {
        return Response.json(
            { message: 'Webhook secret is not configured' },
            { status: 500 },
        );
    }

    // Validate email configuration
    if (
        !process.env.MAIL_HOST ||
        !process.env.MAIL_PORT ||
        !process.env.MAIL_USER ||
        !process.env.MAIL_PASS
    ) {
        return Response.json(
            { message: 'Email configuration is incomplete' },
            { status: 500 },
        );
    }

    const stripe = new Stripe(process.env.STRIPE_KEY);
    const endpointSecret = process.env.SESSION_COMPLETED;

    const body = await req.text();
    const headerList = await headers();
    const sig = headerList.get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return Response.json({ message: err.message }, { status: 400 });
    }

    // Handle the event
    try {
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

                try {
                    await sendEmail(data);
                } catch (emailError) {
                    console.error('Failed to send email:', emailError);
                    // Don't return error response here as the payment was successful
                    // Just log the error and continue
                }

                break;

            default:
                console.log('Unhandled event type:', event.type);
        }

        return Response.json({ received: true }, { status: 200 });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return Response.json(
            { message: 'Internal server error' },
            { status: 500 },
        );
    }
}
