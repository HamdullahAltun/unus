const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
 if(!kanal) return message.channel.send(`
 Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: ${pref}kayıtkanalayarla \`#kayıtkanal\``)
 
  message.channel.send(`Kayıt Kanalını **${kanal}** Olarak Ayarladım! `)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-kanal-ayarla"], 
  kategori: "kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtkanalayarla',
  description: 'Kayıt kanalını ayarlarsınız.', 
  usage: 'Örnek: kayıtkanalayarla #kayıtkanal'
};
