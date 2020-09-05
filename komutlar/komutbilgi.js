const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
let prefix = db.fetch(`prefix.${message.guild.id}`) || "*"
let komut = args[0]
if(!komut) return message.channel.send(`:x: Bilgisini göstereceğim komutun ismini belirtmelisin.`)
if(!client.commands.has(komut)) return message.channel.send(`:x: Komut listemde böyle bir komut bulamadım.`)
komut = client.commands.get(komut)
let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(`${komut.help.name} Komutu Bilgileri`, client.user.avatarURL)
 .addField(`Kullanım`, prefix + komut.help.name, true)
 .addField(`Seviye`, komut.conf.permLevel.toString().replace('0', 'Yetki gerekmiyor').replace('2', 'Üyeleri Yasakla').replace('3', 'Yönetici').replace('3', 'Yönetici').replace('4', 'pRx').replace('BAN_MEMBERS','Üyeleri Yasakla').replace('KICK_MEMBERS','Üyeleri At').replace('MANAGE_CHANNELS','Kanalları Yönet').replace('MANAGE_ROLES','Rolleri Yönet').replace('MANAGE_GUILD','Sunucuyu Yönet').replace("MANAGE_EMOJIS","Emojileri Yönet"), true)
 .addField(`Alternatifler Komutlar`, komut.conf.aliases.join(`, `) || `Bu komutun alternatifi bulunmamakta.`)
 .addField(`Açıklama`, komut.help.description)
 .setFooter(`${message.author.tag} Tarafından istendi.`, message.author.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kbilgi","komutlarbilgi"],
  kategori: "kullanıcı",
  permLevel: 0,
};

exports.help = {
  name: 'komutbilgi',
  description: 'Belirtilen komut hakkında bilgi verir.',
  usage: 'komutbilgi meme'
};