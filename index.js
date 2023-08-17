const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token, colorembed, roleauto, channelaurevoir, channelbienvenue, 
  statue1, statue2, statue3, messagebienvenuetitre, messageaurevoirtitre, messageaurevoirtext, 
  messagebienvenuetext, messageconsolebotpret, erreurcommandemp, titlecommandehelp,
messagereaction1, messagereaction2, messagereaction3, reaction1, reaction2, reaction3, echeccommande, titleban,
titlekick, titlemute, titleunmute, cleartitle} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);

}

client.on('ready', () => {

  console.log(messageconsolebotpret);
  const statuses = [
      () => statue1,
      () => statue2, 
      () => statue3
  ]
  let i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i](), {type: 'STREAMING'})
      i = ++i % statuses.length
  }, 1e4)
});

  client.on("guildMemberAdd", member => {
  
    member.roles.add(roleauto)
    const embed = new Discord.MessageEmbed()
    .setTitle(messagebienvenuetitre)
    .setDescription(messagebienvenuetext)
    .setColor(colorembed)

    return member.guild.channels.cache.find(channel => channel.id === channelbienvenue).send(embed)
  
  });
  
  client.on("guildMemberRemove", member => {

    const embed = new Discord.MessageEmbed()
    .setTitle(messageaurevoirtitre)
    .setDescription(messageaurevoirtext)
    .setColor(colorembed)
    return member.guild.channels.cache.find(channel => channel.id === channelaurevoir).send(embed)
  
  });

client.on('message', message => {

  if(message.author.bot) return;

  if(message.channel.type == "dm"){

  if(message.content == prefix + "help"){
    
    const embed = new Discord.MessageEmbed()
    .setTitle(titlecommandehelp)
    .addFields(
      { name: "...", value: `...`, inline: true},
  )
  .setColor(colorembed)
    return message.channel.send(embed)
  }

    message.channel.send(erreurcommandemp);

    return;
  }

if(message.content === "slt"){
  message.react('🖐️')
  }

  if(message.content === "Slt"){
    message.react('🖐️')
  }

  if(message.content === "cc"){
    message.react('🖐️')
  }

  if(message.content === "hey"){
    message.react('🖐️')
  }

  if(message.content === "Bonjour"){
    message.react('🖐️')
  }

  if(message.content === "bonjour"){
    message.react('🖐️')
  }

  if(message.content === "Bjr"){
    message.react('🖐️')
  }

  if(message.content === "bjr"){
    message.react('🖐️')
  }

  if(message.content === "salut"){
    message.react('🖐️')
  }

  if(message.content === "hola"){
    message.react('🖐️')
  }

  if(message.content === "Cc"){
    message.react('🖐️')
  }

  if(message.content === "Hey"){
    message.react('🖐️')
  }

  if(message.content === "Salut"){
    message.react('🖐️')
  }

  if(message.content === "Hola"){
    message.react('🖐️')
  }

  if(message.content === "coucou"){
    message.react('🖐️')
  }

  if(message.content === "Coucou"){
    message.react('🖐️')
  }

  if(message.content === messagereaction1){
    message.react(reaction1)
  }

  if(message.content === messagereaction2){
    message.react(reaction2)
  }

  if(message.content === messagereaction3){
    message.react(reaction3)
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply(echeccommande);
    }
})

client.login(token);