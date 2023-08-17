const Discord = require("discord.js");
const {colorembed, rolemute, titlemute, messagenomentionmute, messagemute} = require('./config.json');

module.exports = {
    name: 'mute',
    description: "mute",
    execute(message, args){

        if(message.member.hasPermission('ADMINISTRATOR')){

            const user = message.author        

            let users = message.mentions.members.first()
    
            const mention = args.join(' ')
            if (!mention) return message.channel.send(messagenomentionmute)

            users.roles.add(rolemute)

            message.channel.send(new Discord.MessageEmbed()
            .setColor(colorembed)
            .setTitle(titlemute)
            .setDescription(messagemute + users.displayName)
            .setFooter("Mute par " + user.username))
        
    }
  }
}