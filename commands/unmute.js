const Discord = require("discord.js");
const {colorembed, titleunmute, rolemute, messagenomentionmute, messageunmute} = require('./config.json');

module.exports = {
    name: 'unmute',
    description: "unmute",
    execute(message, args){

        if(message.member.hasPermission('ADMINISTRATOR')){

            const user = message.author        

            let users = message.mentions.members.first()
    
            const mention = args.join(' ')
            if (!mention) return message.channel.send(messagenomentionmute)

            users.roles.remove(rolemute)

            message.channel.send(new Discord.MessageEmbed()
            .setColor(colorembed)
            .setTitle(titleunmute)
            .setDescription(messageunmute + users.displayName)
            .setFooter("Unmute par " + user.username))
        
    }
  }
}