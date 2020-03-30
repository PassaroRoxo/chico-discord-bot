module.exports = {
    name: 'bark',
    description: 'Make Chico bark',
    execute(menssage) {
        if( menssage.content.toLowerCase().split(' ').some(function(w){return w === 'au'})             ) {
            menssage.channel.send('Au Au!!!');
        }
    }
}