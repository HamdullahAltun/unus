const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
     const modrol = db.fetch(`moderasyonrol_${message.guild.id}`)  
 if(!modrol) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
  
  message.channel.send(`Moderasyon komutlarını kullanabilecek rol silindi.`)

  db.delete(`moderasyonrol_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["moderasyon-rol-sil"], 
  kategori: "sunucu", 
  permLevel: 3
};

exports.help = {
  name: 'moderasyonrolsil',
  description: 'Moderasyon komutlarını kullanabilecek rolü silersiniz.', 
  usage: 'modersayonrolsil'
};
