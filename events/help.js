const Discord = require("discord.js");
const embed = {
  "color": 16777215,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/617442660038344803/617560922814414848/Webp.net-resizeimage.jpg",
    "text": "In Partnership With EraMedia || Escargot Manager"
  },
  "fields": [
    {
      "name": "Help Menu",
      "value": "========"
    },
    {
      "name": "Work IN Progress",
      "value": "This is still a work in Progress. Thank you for your cooperation."
    },
    {
      "name": "!help",
      "value": "Shows this Help Menu."
    },
    {
      "name": "!contact",
      "value": "This Command is currently not in use due to instability issues. Rest assured that our team is working 24/7 to bring this command back online. in the meanwile, you can type in the name of the person that you are looking for."
    },
    {
      "name": "!add",
      "value": "sends the information you need to add your Email and Description to this bot.",
    },
    {
      "name": "!website",
      "value": "Sends you the website to Escargot and the soon to be Escargot Manager Website.",
    },
    {
      "name": "!invite",
      "value": "Sends you an invite Link so you can Invite the bot to your server. (Not Enabled at this time.)"
    }
  ]
};

module.exports.embed = embed