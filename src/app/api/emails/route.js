import sendEmail from '@/utils/email';

export async function POST(request) {
    try {
        // Check if request body exists
        if (!request.body) {
            return Response.json(
                {
                    success: false,
                    message: 'Request body is required',
                },
                { status: 400 },
            );
        }

        let formData;
        try {
            formData = await request.json();
        } catch (error) {
            return Response.json(
                {
                    success: false,
                    message: 'Invalid JSON in request body',
                },
                { status: 400 },
            );
        }

        // Validate required fields
        if (
            !formData ||
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            return Response.json(
                {
                    success: false,
                    message: 'Missing required fields in form data',
                },
                { status: 400 },
            );
        }

        const sender = {
            name: 'Kaltech Contact Form',
            address: 'usfj_auth@kaltechconsultancy.tech',
        };

        const recipients = [
            {
                name: 'Admin',
                address: 'test@kaltechconsultancy.tech',
            },
        ];

        const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${
            formData.lastName
        }</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
        `;

        const result = await sendEmail({
            sender,
            receipients: recipients,
            subject: `New Contact Form: ${formData.subject}`,
            message: emailContent,
        });

        return Response.json({
            success: true,
            message: 'Email sent successfully',
            data: result,
        });
    } catch (error) {
        console.error('Email sending error:', error);
        return Response.json(
            {
                success: false,
                message: 'Failed to send email',
                error: error.message,
            },
            { status: 500 },
        );
    }
}
