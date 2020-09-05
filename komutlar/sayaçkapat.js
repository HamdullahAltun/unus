const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const kanal = db.fetch(`sayacK_${message.guild.id}`)  
 if(!kanal) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
 
 
  message.reply(`Sayaç **başarıyla kapatıldı.**`)

 
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacS_${message.guild.id}`) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["sayaç-kapat","sayaçsıfırla","sayaç-sıfırla"], 
  kategori: "sayaç",
  permLevel: 3
};

exports.help = {
  name: 'sayaçkapat',
  description: 'Sayaç sistemini kapatır.', 
  usage: 'sayaçkapat'
};
