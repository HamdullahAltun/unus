const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: | Fotoğraf hazırlanıyor, lütfen bekleyin.`).then(m => m.delete(3000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/643085769358966813/646100707186835456/partner2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 1, 0).write(`./img/partner/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/partner/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  "kategori": "eğlence",
    permLevel: 0
  };
  
  exports.help = {
    name: 'partner',
    description: 'Fotoğrafınızın Üstüne Partner Logosu Ekler',
    usage: 'partner'
  };