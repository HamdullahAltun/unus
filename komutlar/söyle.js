const Discord = require("discord.js");
const google = require("google-tts-api");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
exports.run = (client, message) => {
      const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`:warning: İlk önce bir sesli kanala girmelisiniz!`).then(message => message.delete(5000));
  message.delete();


    google(`${args.slice(' ')}`, 'tr', 1).then(url => {
        message.member.voiceChannel.join().then(connection => {
            message.channel.send(`**${args.slice(' ')}** bot tarafından sesli olarak söyleniyor.`).then(message => message.delete(5000)); 
          message.delete()
            connection.playStream(url).on("end", () => {
                connection.disconnect();
            })
        })
    })

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['söyle','konuş'],
  kategori: "kullanıcı",
    permLevel: 0
};

exports.help = {
    name: 'söyle',
    description: 'Bota yazdığınız şeyi sesli mesaj olarak söyletir',
    usage: 'söyle <mesaj>'
};
