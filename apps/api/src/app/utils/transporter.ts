import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'wellappoint@gmail.com',
        pass: 'fosc bstw wvnx ttoy'
    }});

export default transporter;