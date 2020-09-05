 const Discord = require('discord.js');

const cevaplar = [
  "Evet.", 
    "Hayır.", 
    "Muhtemelen.", 
    "İmkansız.", 
    "Ne yazık ki hayır.", 
    "Maalesef.", 
    "Tabii ki.", 
    "Belki de.", 
    "Şimdi söylemeyeceğim.", 
  "Odaklan ve tekrar sor.",
  'Bu kesin.',
                                    'Kesinlikle öyle.',
                                    'Kuşkusuz.',
                                    'Evet, Kesinlikle.',
                                    'Buna güvenebilirsin.',
                                    'Gördüğüm kadarıyla, Evet.',
                                    'Büyük olasılıkla.',
                                    'Görünüşe göre, iyi.',
                                    'İşaretler eveti gösteriyor.',
                                    'Anlayamadım, tekrar edin.',
                                    'Daha sonra sor.',
                                    'Şimdi söylemesen iyi olur.',
                                    'Tahmin edemiyorum...',
                                    'Konsantre ol ve tekrar sor.',
                                    'Buna güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım hayır diyor.',
                                    'Görünüşe göre, bu iyi değil.',
                                    'Çok şüpheli.',
                                    'Şüpheli.',
                                    'Büyük olasılıkla, hayır.',
                                    'İçgüdüm, hayır diyor.',
                                    'Kararsız kaldım, bidaha sormaya ne dersin?'   
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istediğin soruyu yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['magicball','sihirlitop','sihirliküre'],
  kategori: "eğlence",
    permLevel: 0
  };  
  exports.help = {
    name: 'sihirliküre',
    description: 'Sihirli Küreye Soru Sorarsınız.',
    usage: 'sihirliküre ben zeki miyim'
  };
