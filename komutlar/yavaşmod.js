const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, msg, args) => {
  msg.delete();
  let moderasyonrol = await db.fetch(`moderasyonrol_${msg.guild.id}`)
  let pref= await db.fetch(`prefix.${msg.guild.id}`) || "*";
if(moderasyonrol){
  if(!msg.member.hasPermission("MANAGE_CHANNELS") || !msg.member.roles.has(moderasyonrol.id)){
  msg.delete()
  msg.channel.send(`Yeterli yetkiniz yok!`).then(msg => msg.delete(5000))
  return;
}}
  if(!moderasyonrol){
    if(!msg.member.hasPermission("MANAGE_CHANNELS")){
  msg.delete()
  msg.channel.send(`Yeterli yetkiniz yok!`).then(msg => msg.delete(5000))
  return;
}}
if (msg.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
            msg.channel.send(`Doğru kullanım: \`${pref}yavaşmod [0/21600]\``).then(msg => msg.delete(5000))
            return
          }
if (limit > 21600) {
    return msg.channel.send("Yavaş Mod limiti maksimum **21 600** saniye (6 saat) olabilir.").then(msg => msg.delete(5000))
}
    msg.channel.sendEmbed(`:white_check_mark: **| Başarılı** bu odada kullanıcılar \`${limit}\` saniye aralıklarla mesaj gönderebilecek.`).then(msg => msg.delete(5000))
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${process.env.TOKEN}`
    },
})};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: true, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: ['yavaş-mod'], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: "Kanalları Yönet veya Moderasyon Rol",
	kategori: 'moderasyon' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
}

exports.help = { // Ana ayarları belirtiyoruz.
	name: 'yavaşmod', // Komutu belirtiyoruz.
	description: 'Komutu yazdığınız kanalın yavaş modunu ayarlarsınız.', // Yardımda gözüken açıklamayı belirtiyoruz.
	usage: 'yavaşmod 10' // Yardımda gözükecek kullanımı belirtiyoruz.
}
