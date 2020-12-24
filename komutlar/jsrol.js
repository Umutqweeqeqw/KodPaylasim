///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7

///alt yapı Ayberk#0300 tarafındın yapılmıştır 
/// discord sunucusu  https://discord.gg/cpbnCH7
const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '720983561229959168')
  if(message.guild.id !== '720975143366819932') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece Kod Paylaşım sunucusunda kullanabilirsin.').setColor('BLUE'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('<a:hype:720991905554497697> **JavaScript Rolün Var**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('<a:hype:720991905554497697> **Başarılı**\n**<a:hype:720991905554497697> JavaScript Rolü Verildi.**')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('**Altyapı Rolün Zaten Var**')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "altyapı rolü verir.",
  usage: "js"
};