const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)

    if (!hgbbkanal) {
        let kanal = message.mentions.channels.first();
        if (!kanal) return message.reply(`:question: Lütfen kanal belirtin.`)

        db.set(`hgbbkanal_${message.guild.id}`, kanal.id)
        message.channel.send(`:white_check_mark: HGBB kanalı ${kanal} olarak ayarladım.`)

    } else {
        if (hgbbkanal) {

            return message.channel.send(`:warning: Bu sunucuda daha önceden ayarlanmış kanal mevcut. Sıfırlamak için: ${pref}hgbbsıfırla`)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbayarla'],
  kategori: "sunucu",
    permLevel: 3
}

exports.help = {
    name: 'hgbbayarla',
    description: 'HGBB kanalını ayarlarsınız.',
    usage: 'hgbbkanalayarla <#kanal>'
}