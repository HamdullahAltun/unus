const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Sunucunuzda Aktif Değildir. Ücretsiz Aktivasyon İçin \`${pref}premium\``)
  } else {
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(' Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. `Örnek: '+ `${pref}`+'sayaçbbmsj -uye-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('Sayaç Görüşürüz mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`sayacBB_${message.guild.id}`, mesaj)  
    
  }
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["sayaçbbmsj","sayacbbmsj","sayac-bb-msj"], 
  kategori:"sayaç",
  permLevel: 3
};

exports.help = {
  name: 'sayaçbbmsj',
  description: 'Sayaç görüşürüz mesajını ayarlar.', 
  usage: 'sayaçbbmsj -uye-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. -uyesayisi- Kişiyiz.'
};
