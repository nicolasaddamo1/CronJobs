const axios = require('axios');

async function sendNewYearEmail() {
    try {
        const response = await axios.get('https://litro-ong.onrender.com/mailer/send-newyear-email');
        console.log('New Year email sent:', response.data);
    } catch (error) {
        console.error('Error sending New Year email:', error.response ? error.response.data : error.message);
    }
}

sendNewYearEmail();
