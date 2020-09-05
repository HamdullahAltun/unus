const Discord = require('discord.js');
const superagent = require('superagent');
exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`:x: Bir Şehir Girmelisin.`)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
    if(!{body}) return message.channel.send(`Görünüşe Göre Bir Sorun Var, Lütfen Daha Sonra Tekrar Dene.`)
    if(body.hata) return message.channel.send(`Olamaz! Bir Sorun Oluştu. Geçerli Bir Şehir Girmelisin. Şehir isimlerini küçük harflerle yazın.`)
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`:mosque: **${args[0]}** Şehri İçin Namaz Vakitleri Aşağıda Yer Almaktadır.`)
    .addField(`**İmsak**`, body.İmsak, true)
    .addField(`**Güneş**`, body.Güneş, true)
    .addField(`**Öğle**`, body.Öğle, true)
    .addField(`**İkindi**`, body.İkindi, true) 
    .addField(`**Akşam**`, body.Akşam, true)
    .addField(`**Yatsı**`, body.Yatsı, true)
    .setFooter(client.user.username + " Bot", client.user.avatarURL)
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['namaz-vakti', 'nv'],
  kategori: "kullanıcı",
    permLevel: 0
};

exports.help = {
    name: 'namazvakti',
    description: 'Namaz vakitlerini gösterir. (Şehir isimlerini küçük harflerle yazın.)',
    usage: 'namazvakti istanbul'
};