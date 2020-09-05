const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
let unus = db.get(`unus.silinenmesaj_${message.channel.id}`)
if(!unus) return message.channel.send(`:x: Bu kanalda önceden bir mesaj silinmemiş.`)
const embed = new Discord.RichEmbed()
 .setColor('BLUE')
 .setAuthor(client.users.get(unus.sahip).tag, client.users.get(unus.sahip).avatarURL)
 .addField(`Son Silinen Mesaj İçeriği`, unus.mesaj)
 .setFooter(`${message.author.tag} Tarafından istenildi - Unus Bot Snipe`, client.user.avatarURL)
 .setTimestamp(unus.tarih) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["sonsilinenmesaj","sonsilinen"],
 permLevel: 0,
 kategori: "kullanıcı"
};

exports.help = {
 name: 'snipe',
 description: 'Son silinen mesajı gösterir.',
 usage: 'snipe'
};