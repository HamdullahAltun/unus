const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`Moderasyon rolünü etiketlemelisiniz. Örnek: \`${pref}moderasyonrolayarla @üyeler\``)
 
  message.channel.send(`Moderasyon komutlarını kullanabilecek rol **${rol}** olarak ayarlandı.`)

  db.set(`moderasyonrol_${message.guild.id}`, rol)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["moderasyon-rol-ayarla"], 
  kategori: "sunucu", 
  permLevel: 3
};

exports.help = {
  name: 'moderasyonrolayarla',
  description: 'Moderasyon komutlarını kullanabilecek rolü ayarlarsınız.', 
  usage: 'modersayonrolayarla <@rol>'
};
