const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let pref = (db.fetch(`prefix.${message.guild.id}`)) || "*";

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)
    
    if (hgbbkanal) {
        db.delete(`hgbbkanal_${message.guild.id}`)
        message.channel.send(`:white_check_mark: HGBB kanalı sıfırlandı.`)
    } else {
        if (!hgbbkanal) {

            return message.channel.send(`:warning: Bu sunucuda daha önceden ayarlanmış kanal mevcut değil. Ayarlamak için: ${pref}hgbbayarla`)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbsıfırla'],
  kategori: "sunucu",
    permLevel: 3
}

exports.help = {
    name: 'hgbbsıfırla',
    description: 'HGBB kanalını sıfırlarsınız.',
    usage: 'hgbbsıfırla <#kanal>'
}