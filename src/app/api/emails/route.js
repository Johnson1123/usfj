import sendEmail from '@/utils/email';

export async function POST(request) {
    try {
        const formData = await request.json();

        const sender = {
            name: 'Kaltech Contact Form',
            address: 'onifadejohnson2017@gmail.com',
        };

        const recipients = [
            {
                name: 'Admin',
                address: 'test@kaltechconsultancy.tech',
            },
        ];

        const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
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
