const Discord = require('discord.js');
const discordClient = new Discord.Client();

// Login using token first, can be made a function
discordClient.login(process.env.DISCORD_TOKEN);


//When bot is logged in, show status.
discordClient.on('ready', () => {
    console.log(`[Discord] Logged in as ${discordClient.user.tag}!`);
});
