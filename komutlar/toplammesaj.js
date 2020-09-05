const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, tools) => {

   let user;
  if(message.mentions.users.first()) user = message.mentions.users.first() || message.author;
  else {
  if(!args[0]) return message.reply('Lütfen kullanıcıyı belirtiniz.')
  message.guild.members.forEach(a => {
  if(a.user.username.toLowerCase().match(args[0])) user = a.user
  else if(a.user.username.toUpperCase().match(args[0])) user = a.user
  else if(a.user.username.match(args[0])) user = a.user
  else if(a.user.id === args[0]) user = a.user
  })
  }
  
  db.fetch(`SM_${message.guild.id}_${user.id}`).then(server => {
  message.reply(`${user}'in Sunucudaki Toplam Mesajı: **${server}**`)
  
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['toplammesajları',"sunucudakimesajları","sunucudakitoplammesajları","sunucudakitoplammesaj","sunucudakimeasj"],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'toplammesaj',
  description: 'Kendinizin veya belirttiğiniz kişinin sunucudaki toplam mesaj sayısını gösterir.',
  usage: 'toplammesaj @kişi'
};