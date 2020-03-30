module.exports = {
    name: 'infos',
    description: 'Show info about Chico',
    execute(menssage, args, discord) {
        const version = '1.0.0';
        const contributors = "Henrique Artur";

        switch(args[1]) {
            default:
                const enbed = new discord.MessageEmbed()
                .setTitle( "Informaçõe do Chico" )
                .setDescription('Chico foi desenvolvido para automatizar alguns processos do Servidor da TGD Studio e também para torna a comunicação mais divertida!')
                .setColor( 0xE0346E )
                .setFooter( 'Desenvolvido por TGD Studio' )
                .setAuthor('Henrique Artur',
                    'https://avatars2.githubusercontent.com/u/32515155?s=460&u=b99151b84ac89e21d717552275e7c187e78ff711&v=4',
                    'https://github.com/PassaroRoxo')
                .addFields(
                    { name: 'Versão', value: version },
                    { name: 'Colaboradores', value: contributors }
                );
                menssage.channel.send( enbed );
            break;
        }
    }
}