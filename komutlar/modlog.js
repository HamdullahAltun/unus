
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`:warning: Lütfen bir kanal giriniz! \nDoğru Kullanım; \`${pref}modlog <#kanal>\``)

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(`:white_check_mark: Modlog kanalı başarılı bir şekilde ayarlandı.`)
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
        return message.channel.send(`:warning: Bu sunucuda daha önceden **modlog** kanalı ayarlanmış. Sıfırlamak için: **${pref}modlogsıfırla**\nAyarlanan kanal: <#${modlogkanal.id}>`)
        
      }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunuculog'],
  kategori: "sunucu",
    permLevel: 3
}

exports.help = {
    name: 'modlog',
    description: 'Sunucu log kanalını ayarlarsınız.',
    usage: 'modlog <#kanal>'
}
