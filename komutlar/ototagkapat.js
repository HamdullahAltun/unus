const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
   const ototag = db.fetch(`ototag_${message.guild.id}`)  
 if(!ototag) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
 
 
  message.reply(`Ototag **Başarıyla Kapatıldı.**`)
  
    db.delete(`ototag_${message.guild.id}`)  


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["oto-tag-kapat"], 
  kategori: "ototag",
  permLevel: 3
};

exports.help = {
  name: 'ototagkapat',
  description: 'Ototagı kapatırsınız.', 
  usage: 'ototagkapat'
};