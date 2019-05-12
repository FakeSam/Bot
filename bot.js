const Discord = require('discord.js');

const client = new Discord.Client();

var BOT_TOKEN = "NTc2OTE1MDk5Nzg1MzYzNDY2.XNde1A.PL4YNNw46uOs_R-Htibb0Lg6KaA"

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOkEN);
