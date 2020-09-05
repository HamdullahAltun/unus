
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let prefix = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let resimligiris = db.get(`resimlihgbb_${message.guild.id}`)
  
  if(!resimligiris) {
    return message.channel.send(`:warning: Bu sunucuda daha önceden **resimli hg-bb** kanalı ayarlanmamış. Ayarlamak için: \`${prefix}resimligirişçıkışayarla <#kanal>\``)
  } else {
    if(resimligiris) {    
      db.delete(`resimlihgbb_${message.guild.id}`)
      message.channel.send(`:white_check_mark: **Resimli HG-BB** kanalı başarılı bir **sıfırlandı**!`)
    }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['resimligirişsıfırla'],
  kategori: "sunucu",
    permLevel: 3
}

exports.help = {
    name: 'resimligirişçıkışsıfırla',
    description: 'Resimli giriş-çıkış kanalını sıfırlarsınız.',
    usage: 'resimligirişçıkışsıfırla'
}