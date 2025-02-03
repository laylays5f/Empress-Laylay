const fs = require('fs');

// Function to read a JSON file
const readJSON = (filePath) => {
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return [];
};

// Function to write data to a JSON file
const writeJSON = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Function to check if a user is premium
const isPremium = (userId) => {
    const premiumUsers = readJSON('./premium.json');
    return premiumUsers.includes(userId);
};

module.exports = { readJSON, writeJSON, isPremium };