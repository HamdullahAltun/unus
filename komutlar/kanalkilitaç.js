const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
    let moderasyonrol = db.fetch(`moderasyonrol_${message.guild.id}`)
      let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs)
if(moderasyonrol){if(!message.member.hasPermission("MANAGE_CHANNELS") || !message.member.roles.has(moderasyonrol.id)){
  message.delete()
  message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
  return;
}}
  if(!moderasyonrol){
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
  message.delete()
  message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
  return;
}
  }
    message.delete()
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    })
    message.channel.send(`**:unlock: <#${message.channel.id}>'in kilidi <@${message.author.id}> tarafından kaldırıldı.**`)
  
  if(modlogs){
    const embed = new Discord.RichEmbed()
    .setColor("YELLOW")
    .setTitle("**[KANAL KİLİT AÇILDI]**")
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**:unlock: <#${message.channel.id}> Kanalının Kilidi <@${message.author.id}> Tarafından \`\`AÇILDI\`\`.**\n**Kanal İsmi:** \`\`${message.channel.name}\`\` **(ID: ${message.channel.id})**\n**Yetkili:** <@${message.author.id}> **(ID: ${message.author.id})**`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
    modlogkanal.send(embed)
    }

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kanalaç','kilitaç','unlock'],
  kategori:"moderasyon",
    permLevel: "Kanalları Yönet veya Moderasyon Rol" 
}

exports.help = {
    name: 'kanalkilitaç',
    description: 'Kanalı yazı yazımına açar.',
    usage: 'kanalkilitaç'
}
