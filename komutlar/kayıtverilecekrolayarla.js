const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: \`${pref}kayıtverilecekrolayarla @üyeler\``)
 
  message.channel.send(`Kayıt Olan Kullanıcılara Verilecek Otomatik Rol **${rol}** Şeklinde Ayarlandı.`)

 
  db.set(`kayitVR_${message.guild.id}`, rol.id)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-verilecek-rol-ayarla"], 
  kategori: "kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtverilecekrolayarla',
  description: 'Kayıt olunduktan sonra verilecek rolü ayarlarsınız.', 
  usage: 'kayıtverilecekrolayarla <@rol>'
};
