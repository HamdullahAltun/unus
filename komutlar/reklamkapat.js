const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
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
  if (!db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
}
  db.delete(`reklamK_${message.channel.id}`)
  message.reply(`Reklam Engeli **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["reklamengelkapat","reklamengelikapat"], 
  kategori:"moderasyon",
  permLevel: "Kanalları Yönet veya Moderasyon Rol"
};

exports.help = {
  name: 'reklamkapat',
  description: 'Yazdığınız kanaldaki reklam engelini kapatır.', 
  usage: 'reklamkapat'
};
