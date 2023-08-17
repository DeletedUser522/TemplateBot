const { Message, Client, MessageEmbed } = require("discord.js");
const {colorembed} = require('./config.json');
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");


module.exports = {
    name: 'user',
    description: "Pour avoir l'info d'une personne",
    async execute(message, args) {
        if(message.member.hasPermission('ADMINISTRATOR')){

    let victim = message.mentions.users.first() || (args[0] ? await client.users.getUser(args[0]) : undefined) || message.author;
    message.channel.send(new MessageEmbed()
    .setThumbnail(victim.avatarURL({ dynamic: true }))
    .setDescription("Information de " + victim.username)
    .setColor(colorembed)
    .addFields(
        { name: "Pseudo", value: `"${victim.tag}"`, inline: false },
        { name: "ID", value: `"${victim.id}"` , inline: false },
        { name: "Bot ?", value: `${victim.bot}` , inline: false },
        { name: "Crée le", value: `${moment(victim.createdTimestamp).tz("Europe/Istanbul").format("YYYY.MM.DD | HH:mm:ss")}` , inline: false },
    )
    .setFooter(`Commande faite par ${message.author.tag}`));
    }
}
}