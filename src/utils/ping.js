const https = require('https');

function ping(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            console.log(`[${new Date().toISOString()}] Pinged ${url} - Status: ${res.statusCode}`);
            resolve({ status: res.statusCode });
        }).on('error', (e) => {
            console.error(`[${new Date().toISOString()}] Error pinging ${url}: ${e.message}`);
            resolve({ status: 'DOWN', error: e.message });
        });
    });
}

module.exports = { ping };
