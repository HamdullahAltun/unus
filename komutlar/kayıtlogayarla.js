const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
 if(!kanal) return message.channel.send(`
 Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: ${pref}kayıtlogayarla \`#kayıtkanal\``)
 
  message.channel.send(`Kayıt Log Kanalını **${kanal}** Olarak Ayarladım! `)

 
    db.set(`kayitLog_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-log-ayarla"], 
  kategori: "kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtlogayarla',
  description: 'Kayıt log kanalını ayarlarsınız.', 
  usage: 'Örnek: kayıtlogayarla #kayıtkanal'
};
