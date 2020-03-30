module.exports = {
    name: 'poll',
    description: 'Make a poll to vote',
    execute(menssage, args, discord) {
        let msgArgs = args.slice(1).join(' ');

        const enbed = new discord.MessageEmbed()
            .setTitle( "📋 **" + msgArgs + "**" )
            .setColor( 0xE0346E )
        menssage.channel.send( enbed ).then(menssageReaction => {
            menssageReaction.react('👍');
            menssageReaction.react('👎');
        });
    }
}