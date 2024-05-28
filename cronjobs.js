const axios = require('axios');

async function sendChristmasEmail() {
    try {
        const response = await axios.get('https://litro-ong.vercel.app/mailer/send-christmas-email');
        console.log('Christmas email sent:', response.data);
    } catch (error) {
        console.error('Error sending Christmas email:', error);
    }
}

async function sendNewYearEmail() {
    try {
        const response = await axios.get('https://litro-ong.vercel.app/mailer/send-newyear-email');
        console.log('New Year email sent:', response.data);
    } catch (error) {
        console.error('Error sending New Year email:', error);
    }
}

async function sendBirthdayEmail() {
    try {
        const response = await axios.get('https://litro-ong.vercel.app/mailer/send-birthday-email');
        console.log('Birthday email sent:', response.data);
    } catch (error) {
        console.error('Error sending Birthday email:', error);
    }
}

sendChristmasEmail();
sendNewYearEmail();
sendBirthdayEmail();
