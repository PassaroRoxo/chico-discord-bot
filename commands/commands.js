module.exports = {
    name: 'commands',
    description: 'Show all Chico commands',
    execute(menssage, args) {
        menssage.channel.send(
                '**!formulario** - Exibe todos os formulários de Atualizações \n' +
                '**!formulario diario** - Exibe o formulário de atualização Diário \n' +
                '**!formulario semanal** - Exibe o formulário de atualização Semanal \n' +
                '**!formulario pandemia** - Exibe o formulário de atualização de Pandemia'
        );
    }
}