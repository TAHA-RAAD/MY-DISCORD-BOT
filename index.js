const { Client, GatewayIntentsBits } = require("discord.js");
require('dotenv/config')

const Client = new Client({
    intents: [
        GatewayIntentsBits.Guilds,
        GatewayIntentsBits.GuildMessages,
        GatewayIntentsBits.MessageContent,
    ],
})

clinet.on('ready', () => {
    console.log('Discolearn is online')
} )

clinet.on('nessageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('ping')
    }
})

client.login(process.env.TOKEN)