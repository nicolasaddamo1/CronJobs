const axios = require('axios');

async function sendChristmasEmail() {
    try {
        const response = await axios.get('https://litro-ong.onrender.com/mailer/send-christmas-email');
        console.log('Christmas email sent:', response.data);
    } catch (error) {
        console.error('Error sending Christmas email:', error.response ? error.response.data : error.message);
    }
}

sendChristmasEmail();