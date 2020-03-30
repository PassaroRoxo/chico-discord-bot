const Discord = require('discord.js');
const ChicoBot = new Discord.Client();

const token = 'NjkzODI1MTAzMDE1NzA2Njg1.XoCwGg.g9Wdarr5WbpMGQ0zOEoZ-7rJAEs';
const PREFIX = '!';

const fs = require('fs');
ChicoBot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    ChicoBot.commands.set(command.name, command);
}

ChicoBot.on('ready', () => {
    console.log('Chico está online!');
})

ChicoBot.on('message', menssage => {
    ChicoBot.commands.get('findChico').execute(menssage);
    //ChicoBot.commands.get('bark').execute(menssage);

    let args = menssage.content.substring(PREFIX.length).split(" ")
    
    switch(args[0]) {
        case 'comandos':
            ChicoBot.commands.get('commands').execute(menssage);
        break

        case 'formulario':
            ChicoBot.commands.get('forms').execute(menssage, args, Discord);          
        break;

        case 'enquete':
            ChicoBot.commands.get('poll').execute(menssage, args, Discord);
        break

        case 'info':
            ChicoBot.commands.get('infos').execute(menssage, args, Discord);
        break
    }
})

ChicoBot.login(token);