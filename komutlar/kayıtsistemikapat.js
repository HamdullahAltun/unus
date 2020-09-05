const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const rol = db.fetch(`kayitKanal_${message.guild.id}`)  
 if(!rol) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
 
 
  message.reply(`Kayıt Sistemi **Başarıyla Kapatıldı.** `)

 
  db.delete(`kayitAR_${message.guild.id}`)  
  db.delete(`kayitVR_${message.guild.id}`) 
  db.delete(`kayitLog_${message.guild.id}`)  
  db.delete(`kayitKanal_${message.guild.id}`)  
 /* db.delete(`isimtemizleyiciK_${message.guild.id}`) */ 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-sistemi-kapat"], 
  kategori: "kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtsistemikapat',
  description: 'Kayıt sistemini kapatır.', 
  usage: 'kayıtsistemikapat'
};
