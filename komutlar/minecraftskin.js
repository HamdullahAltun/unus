const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let onlycode = args[0]
if(!onlycode) return message.channel.send(`:x: Bir seçenek belirtmelisin. Seçenekler: \`kafa, avatar, cilt.\``)
if(onlycode === `kafa`) {
let kişi = args[1]
if(!kişi) return message.channel.send(`:x: Kafasını göstereceğim kullanıcının ismini belirtmelisin.`)
message.channel.send(new Discord.Attachment(`https://minotar.net/helm/${kişi}`, `UnusMinecraftSkin.png`))
} else if(onlycode === `avatar`) {
let kişi = args[1]
if(!kişi) return message.channel.send(`:x: Avatarını göstereceğim kullanıcının ismini belirtmelisin.`)
message.channel.send(new Discord.Attachment(`https://minotar.net/body/${kişi}`, `UnusMinecraftskin.png`))
} else if(onlycode === `cilt`) {
let kişi = args[1]
if(!kişi) return message.channel.send(`:x: Cildini göstereceğim kullanıcının ismini belirtmelisin.`)
message.channel.send(new Discord.Attachment(`https://minotar.net/skin/${kişi}`, `UnusMinecraftSkin.png`))
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mcskin"],
  kategori:"kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'minecraftskin',
  description: 'Belirtilen kullanıcının Minecraft skinini alırsınız.',
  usage: 'minecraftskin <Kafa/Avatar/Cilt> (Kullanıcı Adı)'
};