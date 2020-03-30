const MessageEmbed = require('discord.js');

module.exports = {
    name: 'atmautomatic-form',
    description: 'Automatic post forms',
    execute(discord, title, url) {
        const enbed = new MessageEmbed()
        .setTitle(title)
        .addField('Link:', url)
        .setColor(0xE0346E);
        
        return enbed;
        
        
        //runForm(menssage, discord, config.forms.daily);
    }
}

// function runForm(menssage, discord, url) {
//     const enbed = new discord.MessageEmbed()
//     .setTitle("Au Au!!! \nNão esqueçam de preencher o Formulário Diário! Au!")
//     .addField('Link:', url)
//     .setColor(0xE0346E)
//     menssage.channel.send(enbed);
// }