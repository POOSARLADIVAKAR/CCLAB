const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'f20170209@hyderabad.bits-pilani.ac.in',
        pass: 'fd635656',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'f20170209@hyderabad.bits-pilani.ac.in',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};