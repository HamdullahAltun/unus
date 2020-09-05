const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  let mesaj = args.slice(0).join(' ');
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (mesaj.length <= 3) {
return message.channel.send(`İsim Sistemi İçin En Az 3 Karakter Belirtebilirsin. Örnek: \`${pref}kayıtisimsistemi -uye-\` yada \`${pref}kayıtisimsistemi -uye- | -yas-\``) 
}

db.set(`isimsistemi_${message.guild.id}`, mesaj)
  message.channel.send(`Kayıt Olan Kullanıcıların İsimlerini \`${mesaj}\` Bu Şekle Göre Düzenleyeceğim.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-isim-sistemi"], 
  kategori: "kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtisimsistemi',
  description: 'Kayıttaki isim düzenlemesini ayarlarsınız.', 
  usage: 'Örnek: kayıtisimsistemi -uye- yada kayıtisimsistemi -uye- | -yas-'
};
