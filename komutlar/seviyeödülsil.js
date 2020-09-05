const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {
    let prefix = await db.fetch(`prefix.${member.guild.id}`) || "*";

  if (!message.member.hasPermission("ADMINISTRATOR")){
    message.delete()
    message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
    return;
  }
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Sunucunuzda Aktif Değildir. Ücretsiz Aktivasyon İçin \`${pref}premium\``)
  } else {
  var user = message.author;
  var lvl = args[0];
  if(!lvl) return message.channel.send("Lütfen bir seviye belirtin.");
  let odulrolu = await db.fetch(`role_${message.guild.id}_${lvl}seviye`);
  if(!odulrolu) return message.channel.send(`**${lvl}** seviyesine ait **ödül rolu bulunamadı**! Eklemek için ${prefix}seviyeödül`);
  if(odulrolu){
  db.delete(`role_${message.guild.id}_${lvl}seviye`);
  message.channel.send(`**${lvl}** seviyesine ait **bütün ödül rolleri** temizlendi! Tekrar ödül rolü eklemek için **${prefix}seviyeödül**`);
  }
  }
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["sös","seviyeyeözelödülsil"], 
  kategori: "sunucu",
    permLevel: 3
};

exports.help = {
  name: 'seviyeödülsil', 
  description: 'Belirtilen seviyeye ait bütün ödül rollerini temizler.', 
  usage: 'seviyeödülsil <seviye>'
};