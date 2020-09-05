const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => { 
    let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  let mesaj = args.slice(0).join(' ');
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (mesaj.length <= 3) {
return message.channel.send(`Yeni Üye Geldiğinde Gönderebilmem İçin Bir Şeyler Yazmalısın. Örnek: Hoş Geldin -uye-. Kayıt Olmak İçin **-prefix-kayıtol** Komutunu Kullanabilirsin.`) 
}

db.set(`kayitGM_${message.guild.id}`, mesaj)
  message.channel.send(`Yeni Üye Geldiğinde Kayıt Kanalına \`${mesaj}\` Mesajını Atacağım`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıtgirişmesajı","kayıt,giriş-mesajı","kayıtgirişmesaj"], 
  kategori:"kayıt",
  permLevel: 3
};

exports.help = {
  name: 'kayıtgirişmesajı',
  description: 'Kayıt giriş mesajını ayarlarsınız.', 
  usage: 'Örnek: Hoş Geldin -uye-. Kayıt Olmak İçin **-prefix-kayıtol** Komutunu Kullanabilirsin.'
};
