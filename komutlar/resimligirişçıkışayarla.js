const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let resimligiris = db.get(`resimlihgbb_${message.guild.id}`)
  
  if(!resimligiris) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`:warning: Lütfen bir kanal giriniz! \nDoğru Kullanım; \`${pref}resimligirişçıkışayarla <#kanal>\``)

    db.set(`resimlihgbb_${message.guild.id}`, kanal.id)
    const resimkanal = message.guild.channels.find(kanal => kanal.id === resimligiris);
    message.channel.send(`:white_check_mark: Resimli HG-BB kanalı başarılı bir şekilde ayarlandı.`)
    
    } else {
      if(resimligiris) {
        
        const resimkanal = message.guild.channels.find(kanal => kanal.id === resimligiris);
        return message.channel.send(`:warning: Bu sunucuda daha önceden **Resimli HG-BB kanalı** ayarlanmış. Sıfırlamak için: **${pref}resimligirişçıkışsıfırla**\nAyarlanan kanal: <#${resimkanal.id}>`)
        
      }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['resimligirişayarla'],
  kategori: "sunucu",
    permLevel: 3
}

exports.help = {
    name: 'resimligirişçıkışayarla',
    description: 'Resimli giriş-çıkış kanalını ayarlarsınız.',
    usage: 'resimligirişçıkışayarla <#kanal>'
}
