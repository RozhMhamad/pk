Am coda abet const discordButtons = require("discord-buttons");
const buttonClient = new discordButtons(client);
client.on("message", message => {
  if (message.content === "!pi") {
    const embed = new Discord.MessageEmbed()
      .setTitle("بۆ پشاندانی پینگی بۆتەکەت کلیک بکە")
      .setColor("GOLD");
    const button1 = new buttonClient.MessageButton()
      .setLabel("پەنجەی پیانێ مامە ")
      .setStyle("green")
      .setID("yes");
    buttonClient.send(null, {
      channel: message.channel.id,
      embed,
      buttons: [[button1]]
    });
  }
});
buttonClient.on("yes", inta =>
  inta.message.reply(`${client.ws.ping}ms بڕۆ خۆتی ڤانە پینگی بۆتەکەت `)
);
