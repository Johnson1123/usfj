import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

const sendEmail = async (data) => {
    const { sender, receipients, message, subject } = data;

    try {
        return await transporter.sendMail({
            from: `${sender.name} <${sender.address}>`,
            to: receipients.map(
                (recipient) => `${recipient.name} <${recipient.address}>`,
            ),
            subject,
            html: message,
            text: message,
        });
    } catch (error) {
        console.error('Email sending error details:', error);
        throw error;
    }
};

export default sendEmail;
