const Discord = require('discord.js');
const Chico = new Discord.Client();
const config = require('./config.json');
const tokens = require('./tokens.json');

const fs = require('fs');
Chico.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Chico.commands.set(command.name, command);
}

Chico.on('ready', () => {
    console.log('Chico está online!');

    // channel ID: 693832232766537758

    Chico.setInterval( () => {
        Chico.channels.resolve('693832232766537758')
            .send( { embed: {
                title: 'Não esqueça de preencher o formulário DIÁRIO!',
                description: config.forms.daily,
                color: 0xE0346E,
                timestamp: new Date(),
                footer: {
                    text: "Equipe de Produção Executiva"
                }
            }});
    }, 5000);
})

Chico.on('message', menssage => {
    Chico.commands.get('findChico').execute(menssage);

    let args = menssage.content.toLowerCase().substring(config.prefix.length).split(" ");
    
    switch(args[0]) {
        case 'comandos':
            Chico.commands.get('commands').execute(menssage);
        break;

        case 'formulario':
            Chico.commands.get('forms').execute(menssage, args, Discord);          
        break;;

        case 'enquete':
            Chico.commands.get('poll').execute(menssage, args, Discord);
        break;

        case 'configdiario':
            Chico.commands.get('atm-daily-form').execute(menssage, Discord);
        break;

        case 'info':
            Chico.commands.get('infos').execute(menssage, args, Discord);
        break;
    }
})

Chico.login(tokens.discord);