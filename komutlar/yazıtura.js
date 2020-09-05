const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıtura','yazı-tura','turayazı'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Bot sizin yerinize yazı tura atar.',
  usage: 'yazıtura'
};
