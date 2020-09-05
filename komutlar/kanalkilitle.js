const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
       let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs)
       let moderasyonrol = db.fetch(`moderasyonrol_${message.guild.id}`)
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
        SEND_MESSAGES: false
    })

    message.channel.send(`**:lock: <#${message.channel.id}> kanalı <@${message.author.id}> tarafından kilitlendi.**`)

  if(modlogs){
    const embed = new Discord.RichEmbed()
    .setColor("YELLOW")
    .setTitle("**[KANAL KİLİTLENDİ]**")
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**:lock: <#${message.channel.id}> Kanalı <@${message.author.id}> Tarafından \`\`KİLİTLENDİ\`\`.**\n**Kanal İsmi:** \`\`${message.channel.name}\`\` **(ID: ${message.channel.id})**\n**Yetkili:** <@${message.author.id}> **(ID: ${message.author.id})**`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
    modlogkanal.send(embed)
  }

}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kanalkapat','kilitle','lock'],
  kategori:"moderasyon", 
    permLevel: "Kanalları Yönet veya Moderasyon Rol" 
}

exports.help = {
    name: 'kanalkilitle',
    description: 'Kanalı yazı yazımına kapatır. (Yöneticisi olanlar hariç.)',
    usage: 'kanalkilitle'
}
