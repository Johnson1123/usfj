import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us11',
});

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return Response.json(
                { error: 'Email is required' },
                { status: 400 },
            );
        }

        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: 'subscribed',
            },
        );

        return Response.json({ success: true, data: response });
    } catch (error) {
        console.error('Mailchimp error:', error);
        return Response.json({ error: 'Failed to subscribe' }, { status: 500 });
    }
}
