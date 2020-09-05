const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
module.exports = async message => {
 /* if(message.channel.type === 'dm'){
    let prefix = ayarlar.prefix;
  }*/
  if(message.channel.type === 'dm') return
let prefix = await db.fetch(`prefix.${message.guild.id}`)
if (prefix == null) prefix = ayarlar.prefix;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if(cmd){
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms)
  }
  
      if(db.has(`yasakK_${message.guild.id}`) === true) {
  if(db.fetch(`yasakK_${message.guild.id}`).includes(cmd.help.name)) return message.channel.send('Bu komut bu sunucuda **yasaklanmıştır!**').then(msg => msg.delete(5000))
      }
    
/* client.guilds.get('684402439402946587').channels.get('713668267474026548').send(`**${message.guild.name}** Adlı Sunucuda **${message.author.tag} (${message.author.id})** Adlı Kullanıcı **${prefix}${cmd.help.name}** Komutunu Kullandı.`)*/
};
