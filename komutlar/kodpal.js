///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7

///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7
const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.has("720982876652437554")) return msg.channel.send("Bu komutu sadece **<@720982876652437554>** kullanabilir!")
  
  if(msg.channel.id !== "720983517647077447") return msg.channel.send("Bu komutu sadece <#720983517647077447> kanalında **kullanabilirsin!**")
  
  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir kod ismi **belirt!**")
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir kod linki **belirt!**")
  
  
  msg.guild.createChannel(kodIsım, {
    type: "text",
    parent: "721678671915647048"
  }).then(channel => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Fynx CODE - Kod Paylaşıldı")
    .addField("<a:hype:720991905554497697> Yetkili Bilgileri", `<a:hype:720991905554497697> Yetkili İsim \`${msg.author.tag}\` \n <a:hype:720991905554497697> Yetkili ID \`${msg.author.id}\``)
    .addField("<a:elmas:720992252184494091> Kod Bilgileri", `<a:elmas:720992252184494091> Kod İsmi \`${kodIsım}\` \n<a:elmas:720992252184494091> Kod Kategorisi \`JavaScript\` `)
    .setColor("#ff6000")
    
    msg.channel.send(`\`${kodIsım}\` adlı kod **paylaşıldı!**`)
    
 client.channels.get("720983444456472586").send(embed)
    
    
    const kod = new Discord.RichEmbed()
    .setAuthor(`"${kodIsım}" Adlı Kod Paylaşıldı!`)
    .addField("Kod Hakkında",`<a:hype:720991905554497697> Yetkili İsim \`${msg.author.tag}\` \n<a:hype:720991905554497697> Yetkili ID \`${msg.author.id}\` \n<a:hype:720991905554497697> Kod Linki [Koda Fırla](${kodLink})`)
    .setTimestamp()
    .setColor("#ff6000")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kod', 'kodpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'kod-paylaş',
 description: 'kod paylaşmaya yarar',
 usage: '!kod <kod isim> <kod linki>'
};

///////<a:hype:720991905554497697>
//////////<a:elmas:720992252184494091>