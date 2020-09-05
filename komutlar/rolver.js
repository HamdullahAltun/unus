const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")){
  message.delete()
  message.channel.send(`Yeterli yetkiniz yok!`).then(message => message.delete(5000))
  return;
}
    let guild = message.guild
    var rol = message.mentions.roles.first()
    let user = message.mentions.members.first()
 try{
    if (!user) return message.reply('**Rol verilecek kişiyi etiketleyin!**').catch(console.error);
    if (!rol) return message.reply('**Lütfen rolü belirtin!**');
    user.addRole(rol);
    message.channel.send(`${user} kullanıcısına ${rol} rolü verildi!`)}
        catch(error) {
          return message.channel.send(`:x: Rolü verirken hata oluştu. Ya **botun rol vermesi için yetkisi yok** ya da **verilmeye çalışılan rol botun rollerinin üstünde**.`)
          }
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-ver'],
  kategori: "moderasyon",
    permLevel: 3
};
 
exports.help = {
    name: 'rolver',
    description: 'Etiketlediğiniz kişiye etiketlediğiniz rolü verir.',
    usage: 'rolver [@kullanıcı] [@rol]'
};