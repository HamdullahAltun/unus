const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")){
    message.delete()
    message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
    return;
  }
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Sunucunuzda Aktif Değildir. Ücretsiz Aktivasyon İçin \`${pref}premium\``)
  } else {
  var user = message.author;
  var role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
  if(!role) return message.channel.send("Lütfen bir rol veya rol id si belirtin.");
  var lvl = args[1];
  if(!lvl) return message.channel.send("Lütfen bir seviye belirtin.");
  
  db.set(`role_${message.guild.id}_${lvl}seviye`, role.id);
  message.channel.send(lvl + " ödül rolü başarıyla @" + role.name + " olarak ayarlandı.");
  }
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["sö","seviyeyeözelödül"], 
  kategori: "sunucu",
    permLevel: 3
};

exports.help = {
  name: 'seviyeödül', 
  description: 'Belirtilen seviyeye gelince kullanıcıya verilecek rolleri belirler.', 
  usage: 'seviyeödül <@rol | rol_id> <seviye>'
};