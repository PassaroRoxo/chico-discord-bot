module.exports = {
    name: 'findChico',
    description: 'Search for Chico name in menssages, then react if find',
    execute(menssage) {
        if( menssage.content.split(' ').some(function(w){return w === 'chico'})             ) {
            menssage.react('🐶').then( menssage.react('❤️') ).catch( () => console.error('One of the emojis failed to react.'));
            menssage.channel.send('Au!');
        }
    }
}