const fs = require('fs');
const crypto = require('crypto');

// Function to generate private key
function generatePrivateKey() {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // RSA key size
    publicKeyEncoding: {
      type: 'pkcs1', // Public Key Cryptography Standards 1
      format: 'pem' // Most common format
    },
    privateKeyEncoding: {
      type: 'pkcs8', // Private Key Cryptography Standards 8
      format: 'pem' // Most common format
    }
  });

  fs.writeFileSync('private_key.pem', privateKey);
  fs.writeFileSync('public_key.pem', publicKey);

  console.log('Private key generated successfully: private_key.pem');
}

// Call the function to generate private key
generatePrivateKey();
