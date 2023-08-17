const Discord = require("discord.js");
const {colorembed, titlekick, mpkick, nopermkick, kickvalide} = require('./config.json');

module.exports = {
    name: 'kick',
    description: "kick un membre!",
    execute(message, args){

        if(message.member.hasPermission('ADMINISTRATOR')){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            let personne = message.author.username
            memberTarget.kick();
            memberTarget.send(mpkick)
            const embed = new Discord.MessageEmbed()
            .setTitle(titlekick)
            .setDescription(kickvalide)
            .setColor(colorembed)
            .setFooter("kick par " + personne)
            return message.channel.send(embed)
        }else{
            const embed = new Discord.MessageEmbed()
            let personne = message.author.username
            .setTitle(titlekick)
            .setDescription(nopermkick)
            .setColor(colorembed)
            return message.channel.send(embed)
        }
    }
  }
}