const Discord = require("discord.js");
const embed = {
  "color": 16777215,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/617442660038344803/617560922814414848/Webp.net-resizeimage.jpg",
    "text": "EraMedia Made || BS-X Computer"
  },
  "fields": [
    {
      "name": "Help Menu",
      "value": "========"
    },
    {
      "name": "!help",
      "value": "Shows This Menu"
    },
    {
      "name": "!server",
      "value": "Shows All Avalible Servers! \nDo !help server for More Info!"
    },
    {
      "name": "!invite",
      "value": "Invite Me into your server!"
    }
  ]
};

module.exports.embed = embed