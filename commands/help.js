const Discord = require("discord.js");
const {colorembed, titlecommandehelp} = require('./config.json');

module.exports = {
    name: 'help',
    description: 'avec cette command vous verrez toute les commandes et leur utilité',
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setTitle(titlecommandehelp)
        .addFields(
          { name: "...", value: `...`, inline: true},
      )
        .setColor(colorembed)
        return message.channel.send(embed)
      }

}

module.exports.help = {
    name: 'help',
  };