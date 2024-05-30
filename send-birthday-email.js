const axios = require('axios');

async function sendBirthdayEmail() {
    try {
        const response = await axios.get('https://litro-ong.onrender.com/mailer/send-birthday-email');
        console.log('Birthday email sent:', response.data);
    } catch (error) {
        console.error('Error sending Birthday email:', error.response ? error.response.data : error.message);
    }
}

sendBirthdayEmail();
