///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7


///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7
const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.has("711288303764111362")) return msg.channel.send("Bu komutu sadece **Kod Paylaşım Ekibi** kullanabilir!")
  
  if(msg.channel.id !== "711288842749214832") return msg.channel.send("Bu komutu sadece <#711288842749214832> kanalında **kullanabilirsin!**")
  
  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir altyapı ismi **belirt!**")
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir altyapı linki **belirt!**")
  
  
  msg.guild.createChannel(kodIsım, {
    type: "text",
    parent: "711297849215942737"
  }).then(channel => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Bir altyapı paylaşıldı!")
    .addField("Yetkili Bilgileri", `Yetkili İsim: \`${msg.author.tag}\` \nYetkili ID: \`${msg.author.id}\``)
    .addField("Altyapı Bilgileri", `Altyapı İsmi: \`${kodIsım}\` `)
    .setColor("#00ff96")
    
    msg.channel.send(`\`${kodIsım}\` adlı altyapı **paylaşıldı!**`)
    
 client.channels.get("711287973760598056").send(embed)
    
    
    const kod = new Discord.RichEmbed()
    .setAuthor(`" ${kodIsım} " adlı altyapı paylaşıldı!`)
    .addField("Altyapı Hakkında",`Yetkili İsim: \`${msg.author.tag}\` \nYetkili ID: \`${msg.author.id}\` \nAltyapı Linki: [Altyapıya Fırla!](${kodLink})`)
    .setTimestamp()
    .setColor("#00ff96")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['akod', 'akodpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'akod-paylaş',
 description: 'kod paylaşmaya yarar',
 usage: '!kod <kod isim> <kod linki>'
};