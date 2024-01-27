const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Get Help Menu",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

     
        const lawde = new MessageActionRow()
	.addComponents(
       new MessageButton()
    .setLabel("Vote Me")
    .setStyle("LINK")
    .setURL(`https://discord.gg/FbCsKCjUWR`),
       new MessageButton()
 .setLabel("Invite")
 .setStyle("LINK")
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`), 
       new MessageButton()
   .setLabel("Support")
 .setStyle("LINK")
    .setURL("https://discord.gg/FbCsKCjUWR"),
          ) 



let helpmenu = new MessageEmbed()

   

        .setAuthor({name : `${client.user.username} Help Pannel`,iconURL : client.user.displayAvatarURL()})
  .setThumbnail("https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61")
  
.setDescription(`<:RedDot:1200741185766047785> Prefix for this server is: ${prefix}\n<:RedDot:1200741185766047785> Total Commands: ${client.commands.size}\n<:RedDot:1200741185766047785>**A Rich Quality Music Bot
Prefix For this server : - **
  
  <:arrow:1199978615417356368> [Invite ${client.user.username}](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot)
  
  <:arrow:1199978615417356368> [Vote ${client.user.username}](https://discord.gg/FbCsKCjUWR)
\n**Command Categories**\n<:info:1199977315426369607> : **Info**\n<:Music:1199967393640878112> : **Music**\n<:filters:1199978391261155380> : **Filters**\n<:configuration:1199977994366758912> : **Settings**\n<:playlist:1199976478092296263> :  **Utility**\n<:commands:1199978270456819752> : **All Commands**`)

      //  .setFooter(ee.footertext, ee.footericon)
        .setFooter({text : `Made With 💖 By TEC <3` , iconURL : message.guild.iconURL({dynamic : true})}).setThumbnail(client.user.displayAvatarURL({dynamic : true}))
     .setColor("#303037")

 

     
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('help')
                .setPlaceholder('Main Command')
                .addOptions([
                {
                    label: 'Info',
                    description: 'Information Commands Of TEC <3',
                    value: 'first',
                  emoji: '<:info:1199977315426369607>'
                },
                {
                    label: 'Music',
                    description: 'Music Commands Of TEC <3',
                    value: 'second',
                    emoji: '<:Music:1199967393640878112>'
                },
                  {
                    label: 'Filters',
                    description: 'Filter Commands Of TEC <3',
                    value: 'fourth',
                    emoji: '<:filters:1199978391261155380>'
                  },
                  {
                    label:'Setting',
                    description: 'Configuration Commands Of TEC <3',
                    value: 'fifth',
                    emoji: '<:configuration:1199977994366758912>'
                  },
                  {
                   label: 'Utility',
                   description: 'Utility commands of TEC',
                    value: 'sixth',
                    emoji: '<:playlist:1199976478092296263>'
                  },
                  {
                    label: 'All Commands',
                    description: 'All Commands Of TEC <3',
                    value: 'third',
       emoji: '<:commands:1199978270456819752>'
                  }
                     
            ])
        )
        if (!args[0]) return message.reply({embeds: [helpmenu], components: [row,lawde]});
     //message.reply({ embeds: [helpmenu], components: [row] })
   }
}