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
