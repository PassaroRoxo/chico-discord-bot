module.exports = {
    name: 'forms',
    description: 'Show all TGD Forms',
    execute(menssage, args, discord) {
        var formDaily = 'https://forms.gle/851tYSdc4f6MzCmv5';
        var formWeekly = 'https://forms.gle/uzRkS8UkAAtk3vTs8';
        var formPandemic = 'https://forms.gle/4CK8zpAqru9AGFDS6';

        switch(args[1]) {
            case 'diario':
                formMenssage('Formuário Diário', formDaily, menssage);
            break

            case 'semanal':
                formMenssage('Formuário Semanal', formWeekly, menssage);
            break

            case 'pandemia':
                formMenssage('Formuário Pandemia', formPandemic, menssage);
            break

            default:
                const enbed = new discord.MessageEmbed()
                .setTitle( 'Lista de Formulários' )
                .addFields(
                    { name: 'Diário:', value: formDaily },
                    { name: 'Semanal:', value: formWeekly },
                    { name: 'Pandemia:', value: formPandemic })
                .setImage('https://image.shutterstock.com/image-photo/office-worker-businessman-dachshund-sausage-260nw-603408470.jpg')
                .setColor(0xE0346E)
                menssage.channel.send(enbed);
            break
        }
    }
}

function formMenssage(title, url, menssage) {
    const enbed = new Discord.MessageEmbed()
    .setTitle(title)
    .addField('Link:', url)
    .setColor(0xE0346E)
    menssage.channel.send(enbed);
}