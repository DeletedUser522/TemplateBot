const Discord = require('discord.js');
const {colorembed, cleartitle, erreurclearnombre} = require('./config.json');

module.exports = {
    name: 'clear',
    description: 'Delete messages.',
    execute(message, args) {
      const amount = parseInt(args[0]) + 1;
      if(message.member.hasPermission('ADMINISTRATOR')){
      if (isNaN(amount)) {
        const embed = new Discord.MessageEmbed()
        .setTitle(cleartitle)
        .setDescription(erreurclearnombre)
        .setColor(colorembed)
        return message.channel.send(embed)
      }
      else if (amount <= 1 || amount > 150) {
        const embed = new Discord.MessageEmbed()
        .setTitle(cleartitle)
        .setDescription("Tu dois saisir un nombre compris entre 1 et 150 !")
        .setColor(colorembed)
        return message.channel.send(embed)
      }
  
      message.channel.bulkDelete(amount)
        .then(messages => console.log(`${messages.size - 1} messages supprimés.`))
    }
  }
};