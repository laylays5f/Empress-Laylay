const fs = require('fs');

const loadDatabase = (filePath) => {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const saveDatabase = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Add a user to the premium list
const addPremiumUser = (userId) => {
    const premiumUsers = loadDatabase('./premium.json');
    if (!premiumUsers.includes(userId)) {
        premiumUsers.push(userId);
        saveDatabase('./premium.json', premiumUsers);
    }
};

module.exports = { loadDatabase, saveDatabase, addPremiumUser };