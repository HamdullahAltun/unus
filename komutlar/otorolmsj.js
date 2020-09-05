const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Sunucunuzda Aktif Değildir. Ücretsiz Aktivasyon İçin \`${pref}premium\``)
  } else {
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `'+ `${pref}`+'otorolmsj -uye- Hoşgeldin! Seninle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('Otorol mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  
  }
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['otorol-msj',"oto-rol-msj","otorolmesaj","otorol-mesaj"], 
  kategori: "otorol",
  permLevel: 3
};

exports.help = {
  name: 'otorolmsj',
  description: 'Otorol mesajını ayarlarsınız.', 
  usage: 'Örnek: otorolmsj -uye- Hoşgeldin! Seninle beraber -uyesayisi- Kişiyiz!'
};
