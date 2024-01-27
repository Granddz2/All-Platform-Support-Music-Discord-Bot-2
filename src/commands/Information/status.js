const { MessageEmbed, version, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      let fck = client.ws.ping
        const embed = new MessageEmbed()
          .setAuthor("TEC Stats", "https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61")
            .setColor(client.embedColor)
.setThumbnail("https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61")

          
            .setDescription(`**__Bot Stats__**\n<:RedDot:1200741185766047785>Bot Name : ${client.user.username}\n<:RedDot:1200741185766047785>Servers : ${scount}\n<:RedDot:1200741185766047785>Users : ${mcount}\n<:RedDot:1200741185766047785>Ping : ${Math.round(client.ws.ping)}ms\n<:RedDot:1200741185766047785>Uptime : ${duration1}\n\n**__Bot Storage__**\n <:RedDot:1200741185766047785>Bot Version : TEC V1\n <:RedDot:1200741185766047785>Js Version : 13.6.0\n\n**__Creator__**\n[The Extremez Coder](https://discord.gg/FbCsKCjUWR)

      `);
      const button = new MessageActionRow()
	.addComponents(
       new MessageButton()
 .setLabel(` Servers ${scount}`)
 .setStyle("DANGER")
 .setDisabled("true")
 .setCustomId("bc")
 .setEmoji("<:commands:1199978270456819752>"),
  
         new MessageButton()
 .setLabel(`Users ${mcount}`)
.setStyle("DANGER")
.setCustomId("lawde")
.setDisabled("true")
.setEmoji("<:user_icon:1199978497645494272>")
    );
  message.reply({embeds: [embed],
               components: [button] });
     }
	}
