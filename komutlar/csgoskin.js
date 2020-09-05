const Discord = require('discord.js');
var getJSON = require('get-json');

exports.run = async (client,message, args) => {
    if(!args){
        return message.channel.send(":x: " + `| Lütfen bir desen **url**si giriniz.\nGireceğiniz url **steam://rungame/730** ile başlamalıdır.\nBu tarz urlyi almak için; Steam pazarı **tarayıcıda** açıp istediğiniz desenin **oyunda incele** butonuna **sağ** tıklayıp **bağlantı adresini kopyalaya** tıklayınız.`);
    }
    else{
        getJSON("https://api.csgofloat.com/?url=" + args, function(err, data){

            if(data == undefined){
                return message.channel.send(":x: " + `| Lütfen geçerli bir **url** giriniz.\nGireceğiniz url **steam://rungame/730** ile başlamalıdır.\nBu tarz urlyi almak için; Steam pazarı **tarayıcıda** açıp istediğiniz desenin **oyunda incele** butonuna **sağ** tıklayıp **bağlantı adresini kopyalaya** tıklayınız.`);
            }

            const embed = new Discord.RichEmbed()
            .setDescription(`**${data.iteminfo.full_item_name}** Deseni Hakkında Bilgiler`)
                .addField("Dış Görünüş: ", data.iteminfo.wear_name.replace("Well-Worn","Eskimiş").replace("Battle-Scarred","Savaş Görmüş").replace("Minimal Wear","Az Aşınmış").replace("Field-Tested","Görevde Kullanılmış").replace("Factory New","Fabrikadan Yeni Çıkmış"), true)
                .addField("Nadirlik: ", data.iteminfo.rarity_name.replace("Covert","Çok Gizli, Üstat, Olağandışı").replace("Consumer Grade","Tüketici Sınıfı, Temel Sınıf").replace("Industrial Grade","Endüstri Sınıfı").replace("Mil-Spec","Askeri Sınıf, Yüksek Sınıf").replace("Restricted","Sınırlı, Sıra Dışı, Dikkat Çekici").replace("Classified","Gizli, Üstün, Egzotik").replace("Contraband","Kaçak").replace("Legendary","Çok Gizli"), true)
                .addField("Aşınmışlık Düzeyi: ", data.iteminfo.floatvalue, true)
                .setFooter(`${message.author.tag} Tarafından istenildi.`)
                .setThumbnail(data.iteminfo.imageurl)
                .setTimestamp()
                .setColor("RANDOM")
            message.channel.send(embed);
        })
    }  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["csgoskinfloat","csgoskindeğer"],
    permLevel: 0,
    kategori: "kullanıcı"
   };
   
   exports.help = {
    name: 'csgoskin',
    description: 'Linkini girdiğiniz desenin aşınmışlığını gösterir..',
    usage: 'csgoskin steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20M4210254499975550040A19153298019D11541077285317565003'
   };