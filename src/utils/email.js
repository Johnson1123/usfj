import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

const sendEmail = async (data) => {
    const { sender, receipients, message, subject } = data;

    // Log email configuration (without sensitive data)
    console.log('Email Configuration:', {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        user: process.env.MAIL_USER ? 'configured' : 'not configured',
        pass: process.env.MAIL_PASS ? 'configured' : 'not configured',
    });

    try {
        const mailOptions = {
            from: `${sender.name} <${sender.address}>`,
            to: receipients.map(
                (recipient) => `${recipient.name} <${recipient.address}>`,
            ),
            subject,
            html: message,
            text: message,
        };

        console.log('Attempting to send email to:', mailOptions.to);

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Email sending error details:', {
            message: error.message,
            code: error.code,
            command: error.command,
            responseCode: error.responseCode,
            response: error.response,
        });
        throw error;
    }
};

export default sendEmail;
