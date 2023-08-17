const Discord = require("discord.js");
const {colorembed, titleban, banvalide, nopermban} = require('./config.json');

module.exports = {
    name: 'ban',
    description: "ban",
    execute(message, args){

        if(message.member.hasPermission('ADMINISTRATOR')){
        const target = message.mentions.users.first();
        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            let personne = message.author.username  
            memberTarget.ban();
            const embed = new Discord.MessageEmbed()
            .setTitle(titleban)
            .setDescription(banvalide)
            .setColor(colorembed)
            .setFooter("bannis par " + personne)
            return message.channel.send(embed)
        }else{
            const embed = new Discord.MessageEmbed()
            .setTitle(titleban)
            .setDescription(nopermban)
            .setColor(colorembed)
            return message.channel.send(embed)
        }
    }
  }
}