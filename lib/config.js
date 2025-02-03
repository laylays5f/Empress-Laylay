require('dotenv').config();

module.exports = {
    owner: process.env.OWNER_NUMBER.split('2348160288068'),
    botName: process.env.BOT_NAME || "Empress-Laylay",
    ownerName: process.env.OWNER_NAME || "Laylay",
    prefix: process.env.PREFIX || ".",
sudoUsers: process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`),
    public: process.env.PUBLIC === 'true',
    antiDelete: process.env.ANTIDELETE === 'true',
    unavailable: process.env.UNAVAILABLE === 'true',
    available: process.env.AVAILABLE === 'true',
    autoReadMessages: process.env.AUTO_READ_MESSAGES === 'true',
    chatbot: process.env.CHATBOT === 'true',
    autoReact: process.env.AUTO_REACT === 'true',
    welcomeEnabled: process.env.WELCOME === 'true',
    commandPrefix: process.env.PREFIX || '.',
    autoBio: process.env.AUTO_BIO === 'true',
    antiCall: process.env.ANTICALL === 'true',
    antiLink: process.env.ANTILINK === 'true',
    antiLinkKick: process.env.ANTILINK_KICK === 'true',
    antiLinkWarn: process.env.ANTILINK_WARN === 'true',
    messages: {
        success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
        admin: process.env.MESSAGE_ADMIN 
};