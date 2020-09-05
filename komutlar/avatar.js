const Discord = require('discord.js');

exports.run = (client, message, args) => {   
    let user = message.mentions.users.first() || message.author;
    
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
    .setURL(user.avatarURL)
    .setTitle(`:link: Tam Boyutta Açmak İçin Tıklayın`) 
        .setAuthor(`${user.username} Adlı Kullanıcının Profil Resmi`)
        .setImage(user.avatarURL)
        .setFooter(`İsteyen Kişi: ${message.author.tag}`)
    .setTimestamp()
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp",'avatar'],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: 'avatar <@kişi> veya avatar'
};