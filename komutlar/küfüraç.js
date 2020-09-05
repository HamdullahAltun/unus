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
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış :slight_smile:`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`**Küfür Engeli** sadece bu kanal için **başarıyla açıldı.**`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["küfürüengeliaç","küfürengelkapat"], 
  kategori:"moderasyon",
  permLevel: "Kanalları Yönet veya Moderasyon Rol"
};

exports.help = {
  name: 'küfüraç',
  description: 'Yazdığınız kanalda küfür engelini açar', 
  usage: 'küfüraç'
};
