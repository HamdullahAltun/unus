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
    if (!user) return message.reply('**Rol alınacak kişiyi etiketleyin!**').catch(console.error);
    if (!rol) return message.reply('**Lütfen rolü belirtin!**');
    user.removeRole(rol);
    message.channel.send(`${user} kullanıcısından ${rol} rolü alındı!`)}
    catch(error) {
          return  message.channel.send(`:x: Rolü verirken hata oluştu. Ya **botun rol vermesi için yetkisi yok** ya da **verilmeye çalışılan rol botun rollerinin üstünde**.`)
          }
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-al'],
  kategori: "moderasyon",
    permLevel: 3
};
 
exports.help = {
    name: 'rolal',
    description: 'Etiketlediğiniz kişiden etiketlediğiniz rolü alır.',
    usage: 'rolal [@kullanıcı] [@rol]'
};