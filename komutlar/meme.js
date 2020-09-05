const Discord = require("discord.js");
const {meme} = require('memejs');
const sozler = require('../subredditler');

exports.run = async (client, message, args) => {
      const subreddit = sozler[Math.floor(Math.random() * sozler.length)]

 meme(subreddit,function(err, data) {
  message.channel.send(`${data.title}`, new Discord.Attachment(data.url));
  })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meem"],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "meme",
  description: "Rastgele meme atar.",
  usage: "meme"
};