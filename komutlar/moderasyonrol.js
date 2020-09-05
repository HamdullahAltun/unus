const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
let rol =  db.fetch(`moderasyonrol_${message.guild.id}`)  || "Ayarlanmamış."
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
const embed = new Discord.RichEmbed()  
.setAuthor("Unus Bot Moderasyon Rol Sistemi", client.user.avatarURL)
.setColor('BLUE')
.addField(`• \`${pref}moderasyonrolayarla @rol\`》`, "Rolü ayarlarsınız.")
.addField(`• \`${pref}moderasyonrolsil\`》`, "Rolü silersiniz.")
.setDescription(`Bu sistem sayesinde hiçbir role yetki vermeden **Unus Botun** moderasyon komutlarını kullanabilecek rolü ayarlayabilirsiniz.\n Şu anki ayarlı rol: **${rol}**`)
.setTimestamp()
.setFooter('Unus Bot',client.user.avatarURL)

 message.channel.send(embed) 

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["moderasyon-rol"], 
  kategori: "sunucu", 
  permLevel: 3
};

exports.help = {
  name: 'moderasyonrol',
  description: 'Moderasyon rol sistemi hakkında bilgi verir.', 
  usage: 'modersayonrol'
};
