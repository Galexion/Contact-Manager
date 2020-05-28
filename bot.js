//reqired
const Discord = require("discord.js");
const client = new Discord.Client();
//events
const help = require("./events/help");
const contacts = {
//This is where you add contacts
    list: {
        page1: require("/*Add a List Dir here*\"),
    }
};
const prefix = "!";
const about = require("./events/about");

client.on("ready", () => {
    console.log("Escargot Manager Has Been Launched.");
    client.user.setActivity("Beta Mode || !help");
})

// Help code
client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        return message.channel.send({ embed: help.embed }).catch(console.error);
    }

    if (command === "add") {
        return message.channel.send({ embed: add.embed });
    }

    if (command === "findout") {
        return message.channel.send({ embed: findout.embed });
    }

    //Commands Code

    if (command === "about") {
        message.delete().catch(console.error);
        return message.author.send({ embed: about.embed }).catch(() => {});
    }

    if (command === "contact") {
        if (args.length < 1) return message.channel.send("> Usage:\n> !contact <contact/list> <list page #>");
        
        switch (args[0]) {
            //Contacts are added here, With Case being the Command that calls it.
                
            //case "TailsEraYT":
            //return message.channel.send({ embed: contacts.TailsEraYT.embed });
                
            case "list":
            if (args.length > 1) {
              switch (args[1]) {
                case "1":
                  return message.channel.send({ embed: list.page1.embed });
                default:
                  //This Deals a case where no Contact or List Was Given.
                  break;
              }
            } else {
              return message.channel.send("> No Page was selected.");
            }
            break;
          default:
            return message.channel.send("> Unknown command/user.");
        }
      }

    if (command === "list") {
         message.channel.send("This Command is Merging with the !contact command in 5/25/20. do !findout to find out more.");
         return message.channel.send({ embed: contacts.list.page1.embed});
    }

});

//ignore

// NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file, or if your using heroku, App, then Options, then click ENV.
client.login(process.env.token);
