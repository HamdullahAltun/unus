const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
   let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
const embed = new Discord.RichEmbed()  
.setAuthor("Unus Bot Kayıt Sistemi", client.user.avatarURL)
.setColor('BLUE')
.addField(`• \`${pref}kayıtkanalayarla #kanal\`》`, "Üyelerin Kayıt Olacağı Kanal")
.addField(`• \`${pref}kayıtlogayarla #kanal\`》`, "Üyeler Kayıt Olunca Bildirim Yollanan Kanal")
.addField(`• \`${pref}kayıtisimsistemi -uye- -yas-\`》`, `
Üye İsim Sistemi Özgürce Yerleştirin
Yaş Seçeneği Eklemezseniz Yaşı Sormayacaktır.
`)
.addField(`• \`${pref}kayıtverilecekrolayarla @rol\`》`, "Kayıt Olan Kullanıcıya Otomatik Verilecek Rol")
.addField(`• \`${pref}kayıtalınacakrolayarla @rol\`》`, "Kayıt Olan Kullanıcıdan Otomatik Alınacak (Silinecek) Rol")
.addField(`• \`${pref}kayıtsistemikapat\`》`, "Kayıt Sistemini Kapatır Ve Tüm Ayarları Sıfırlar.")
.addField(`• \`${pref}kayıtgirişmesajı Hoşgeldin -uye- Kayıt Olmak İçin ${pref}kayıtol Ahmet 19\`》`, "Giriş Mesajını Özgürce Editleyebilirsiniz.")
  .addField('__**Kullanabileceğiniz Değişkenler**__',`
-uye- 》 Üyenin İsmini Yazar.
-yas- 》 Üyenin Yaşını Yazar.
`)
.setTimestamp()
.setFooter('Unus Bot',client.user.avatarURL)

 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayıt-sistemi"], 
  kategori: "kayıt",
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Kayıt sistemi hakkında bilgi verir.', 
  usage: 'kayıtsistemi'
};
