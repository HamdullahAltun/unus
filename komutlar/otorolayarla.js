const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`
Ayarlamam İçin Bir Rol Etiketlemelisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : ${pref}otorol @rol #kanal 

 **Önemli Not!!:** Otorolü Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem.
`
)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► Otorol Aktif Edildi.
║► Rolü <@&${rol.id}> Olarak Güncelledim! 
║► Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["otorol-ayarla","oto-rol-ayarla","oto-rolayarla"], 
  kategori: "otorol",
  permLevel: 3
};

exports.help = {
  name: 'otorolayarla',
  description: 'Otorolü ayarlarsınız.', 
  usage: 'Örnek Kullanım : otorol @rol #kanal'
};
