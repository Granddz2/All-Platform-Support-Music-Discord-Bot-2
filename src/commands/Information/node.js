const { MessageEmbed } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.node.name"),
  category: "Information",
  description: i18n.__("cmd.node.des"),
  args: false,
  usage: "",
  permission: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
    let punit = ["1173547185758015498"];
    if(!punit.includes(message.author.id)) return;

    const all = client.manager.nodes
      .map(
        (node) => ` 
        NODE ID    ::  NODE - 1
        NODE STATE ::  CONNECTED
        PLAYERS    ::  1
        UPTIME     ::  ${new Date(node.stats.uptime)
            .toISOString()
            .slice(11, 19)}
        MEMORY     ::  ${Math.round(
            node.stats.memory.reservable / 1024 / 1024
          )}mb
        CORES      ::  ${node.stats.cpu.cores}
        `
           ) 
            
      
      .join("\n\n----------------------------\n");

    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor({
        name: "Bot Node",
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(`\`\`\`${all}\`\`\``)
.setImage("https://media.discordapp.net/attachments/1162795987014787162/1200747304966164491/node1.png?ex=65c74e12&is=65b4d912&hm=73f282ded159c3bbbeb4a059d92453a7fecf6872e3fe9bcc62f14c00117c115f&=&format=webp&quality=lossless&width=1401&height=311")
      .setColor(client.embedColor);
      message.reply({ embeds: [embed] });
  },
};
