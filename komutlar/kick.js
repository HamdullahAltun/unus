const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
    let moderasyonrol = await db.fetch(`moderasyonrol_${message.guild.id}`)
  message.delete();
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "*";
if(moderasyonrol){if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.roles.has(moderasyonrol.id)){
  message.delete()
  message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
  return;
}}
  if(!moderasyonrol){
    if(!message.member.hasPermission("BAN_MEMBERS")){
  message.delete()
  message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
  return;
}
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send("Lütfen Sunucudan Atılacak Kişiyi Etiketleyiniz!"
    );
  }
    let reason = args.slice(1).join(' ')
 if (!reason) reason = 'Neden belirtilmemiş.'
    if (u.id === message.author.id) return message.reply('Kendinizi atamazsınız!').then(msg => msg.delete(5000));
  if (!message.guild.member(u).bannable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`).then(msg => msg.delete(5000));
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı Kullanıcının Atılmasını Onaylıyor Musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅","❎"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    await sentEmbed.react(emojiArray[1]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 15000
    });
    reactions.on("end", () => sentEmbed.delete());
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(`**:airplane: **${u}** Adlı Kullanıcı Sunucudan Atıldı.**`).then(msg => msg.delete(5000));
 
        message.guild.member(u).kick({reason: `Sebep: ${reason} | Yetkili: ${message.author.tag} - ${message.author.id}`});
      }
      else if (reaction.emoji.name === "❎") {
        sentEmbed.delete();
        message.channel.send(`**İşlem İptal Edildi.**`).then(msg => msg.delete(5000));
      }
    });
  });
};
 
module.exports.conf = {
  aliases: ['at'],
  permLevel: "Üyeleri At veya Moderasyon Rol",
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "kick",
  description: "Etiketlediğiniz kişiyi sunucudan atar.",
  usage: "kick <@kişi>"
};