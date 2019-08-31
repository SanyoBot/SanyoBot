const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

client.on('ready', () => {
  client.user.setGame('$help ', '')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> $
COMENZI BOT
• ||          ||       ||      ||       ||             ||          ||         ||          ||
• ||          ||       ||      ||       ||             ||          ||         ||          ||
• || $support || $info || $say || $ping || $serverinfo || $restart || $invite || $botinfo ||
• ||          ||       ||      ||       ||             ||          ||         ||          ||
• ||          ||       ||      ||       ||             ||          ||         ||          || `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

 if ( message.content.startsWith(prefix+ "youtube")) {
    const embed = new Discord.RichEmbed()
    .setTitle('You Tube')
    .setDescription(`•Robokop Gaming
Canalul nostru de YouTube!!!!
• https://www.youtube.com/channel/UCa1geOnxB31_D_LhT932csg?view_as=subscriber `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '320887181516210177') {
    if (message.content.startsWith(`$restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'Robokop', true)
  embed.addField('Prefix', '$', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '300268467322486785', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', 'Robokop Gaming', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  
   
  client.on('message', message => {    
    if(message.content.startsWith('$mass')) {
    if(message.author.id === "320887181516210177" ||
message.author.id === "320887181516210177"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === '$invite') {
      msg.channel.send(' **Invite** **Robokop** https://discordapp.com/api/oauth2/authorize?client_id=464366413105070081&permissions=8&scope=bot :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '$support') {
      msg.channel.send('**Support server ---> https://discord.gg/vx4Y29H**');
    }
  });

client.on('message', msg => {
    if (msg.content === '$yt') {
      msg.channel.send('**Canalul nostru de youtube https://www.youtube.com/channel/UCa1geOnxB31_D_LhT932csg?view_as=subscriber **');
    }
    });

client.on('message', msg => {
    if (msg.content === '$info') {
      msg.channel.send('**Creatorul meu este Robokop Gaming **');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '[𝐀𝐖] 𝐌𝐞𝐦𝐛𝐫𝐮');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', '𝐖𝐞𝐥𝐜𝐨𝐦𝐞-𝐁𝐲𝐞');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**:v: Bine ai venit pe Robokop 𝐖𝐨𝐫𝐥𝐝!:smiley: :heavy_check_mark:**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '𝐖𝐞𝐥𝐜𝐨𝐦𝐞-𝐁𝐲𝐞');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**A iesit :sob:... Speram sa revii :( !**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
