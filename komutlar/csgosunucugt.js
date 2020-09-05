const discord = require('discord.js');
const superagent = require('superagent')
 
exports.run = (client, msg, args) => {
  if(!args[0]) return msg.channel.send(`Bir sunucu IPsi girmelisin.`)
   const resim = (`https://cache.gametracker.com/server_info/${args[0]}:27015/b_560_95_1.png`)
      msg.channel.send({ file: resim })
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["csgogt","csgoservergt","csgt"],
  kategori: "kullanıcı",
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'csgosunucugt',
  description: 'CS:GO Sunucunuzun GameTracker içindeki sıralamasını gösterir.',
  usage: 'csgosunucugt 185.193.165.153'
};