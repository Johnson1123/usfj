import Stripe from 'stripe';

const base_url =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'https://usfj-johnson.vercel.app/';

export async function POST(request) {
    try {
        const data = await request.json();

        const { quantity, product_id, amount, custom } = data;

        if (!quantity || !product_id || !amount) {
            return Response.json(
                { error: 'Inavalid is data' },
                { status: 400 },
            );
        } else if (!custom) {
            return Response.json(
                { error: 'Select color or size' },
                { status: 400 },
            );
        }

        const stripe = Stripe(process.env.STRIPE_KEY);

        const price = await stripe.prices.create({
            unit_amount: amount, // Amount in cents (e.g., $20.00)
            currency: 'usd',
            product: product_id, // Replace with your actual Product ID
        });

        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                    price: price.id,
                    quantity: quantity || 1,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 100,
                    },
                },
            ],
            // consent_collection: {
            //     terms_of_service: 'required',
            // },
            payment_method_types: ['card'],
            currency: 'usd',

            after_completion: {
                type: 'redirect',
                redirect: {
                    url: `${base_url}payment-successful`,
                },
            },
            billing_address_collection: 'required', // Collect billing address, set to 'auto' to collect when required
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'GB'], // Specify the allowed shipping countries
            },
            custom_fields: [
                {
                    key: custom.key,
                    label: {
                        type: 'custom',
                        custom: custom.key,
                    },
                    type: 'dropdown',
                    dropdown: {
                        default_value: custom.default,
                        options: [
                            {
                                value: custom.values[0],
                                label: custom.values[0],
                            },
                            {
                                value: custom.values[1],
                                label: custom.values[1],
                            },
                            {
                                value: custom.values[2],
                                label: custom.values[2],
                            },
                        ],
                    },
                },
            ],
            // payment_method_types: ['card'],
            // payment_method_collection: 'auto',
            // customer_creation: 'if_required',
            // customer_update: 'true',
            // payment_method_types: ['card'],
            // billing_address_collection: 'required',
            // shipping_address_collection: {
            //     allowed_countries: ['US', 'CA'],
            // },

            // phone_number_collection: {
            //     'phone_number_collection.enabled': true,
            // },
            // shipping_address_collection: {
            //     'shipping_address_collection.allowed_countries': ['US'],
            // },
        });
        console.log(paymentLink);
        return Response.json({
            success: true,
            data: {
                url: paymentLink.url,
            },
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: 'Failed to create payment link',
                error: error.message,
            },
            { status: 500 },
        );
    }
}
