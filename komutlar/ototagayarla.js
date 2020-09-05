const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let isimm = args.slice(0).join(' ');
  if(!isimm) return message.channel.send('Lütfen Tagı Belirtiniz.\n**Örnek Kullanım**`'+ `${pref}`+'ototagayarla ❆ | -uye-`')
  
   message.channel.send('Oto Tag Sistemi Ayarlanmıştır. Kapatmak İçin `'+ `${pref}`+'ototagkapat`')
  
    db.set(`ototag_${message.guild.id}`, isimm)  


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["oto-tag-ayarla"], 
  kategori: "ototag",
  permLevel: 3
};

exports.help = {
  name: 'ototagayarla',
  description: 'Ototagı ayarlarsınız.', 
  usage: 'Örnek: ototagayarla ❆ | -uye-'
};