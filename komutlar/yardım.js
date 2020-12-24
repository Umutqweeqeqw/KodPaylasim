const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.has("720982876652437554")) return msg.channel.send("Bu komutu sadece **Kod Paylaşım Ekibi** kullanabilir!")
  
  if(msg.channel.id !== "720983517647077447") return msg.channel.send("Bu komutu sadece <#720983517647077447> kanalında **kullanabilirsin!**")
  
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Fynx CODE")
    .addField("Kod Paylaşım Menüsü", `**!kod <kod isim> <kod link>** : Discord.js Kod Paylaşımı \n**!pkod <kod isim> <kod link>** : Discord.js+ Kod Paylaşımı \n**!fkod <kod isim> <kod link>** : Fynx Script Kod Paylaşımı\n**!akod <altyapı isim> <altyapı link>** : Altyapı Paylaşımı`)
    .setColor("RANDOM")

    msg.channel.send(embed)
  
  }
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
 name: 'yardım',
 description: 'kod paylaşmaya yarar',
 usage: '!kod <kod isim> <kod linki>'
};