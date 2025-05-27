const { ping } = require('./utils/ping');

const URL = 'https://load-manager.fly.dev'; // Replace with your server URL

const wakeServer = () => {
    ping(URL)
        .then(response => {
            console.log(`Server responded with status: ${response.status}`);
        })
        .catch(error => {
            console.error(`Error pinging server: ${error.message}`);
        });
};

// Set up a timer to wake the server every 30 seconds
setInterval(wakeServer, 30000);