//reqired
const Discord = require("discord.js");
const client = new Discord.Client();
//events
const help = require("./events/help");
const contacts = {
    TailsEraYT: require("./events/Contacts/TailsEraYT"),
    Naidru: require("./events/Contacts/naidru"),
    sprtcrnbry: require("./events/Contacts/sprtcrnbry"),
    warlordoverdriv: require("./events/Contacts/warlordoverdriv"),
    list: {
        page1: require("./events/Contacts/List/page1"),
    }
};
const Invite = require("./events/invite");
const prefix = "!";
const add = require("./events/addcontact");
const about = require("./events/about");
const findout = require("./events/findout");

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

    if (command === "tailserayt") {
        message.channel.send("> This Command will be gone by 5/25/20. do !findout to find out more.")
        return message.channel.send({ embed: contacts.TailsEraYT.embed }).catch(console.error);
    }
    
    if (command === "naidru") {
        message.channel.send("> This Command will be gone by 5/25/20. do !findout to find out more.")
        return message.channel.send({ embed: contacts.Naidru.embed });
    }
    
     if (command === "sprtcrnbry") {
         message.channel.send("> This Command will be gone by 5/25/20. do !findout to find out more.")
        return message.channel.send({ embed: contacts.sprtcrnbry.embed });
    }

    if (command === "add") {
        return message.channel.send({ embed: add.embed });
    }

    if (command === "findout") {
        return message.channel.send({ embed: findout.embed });
    }

    //Commands Code
    if (command === "website") {
        message.author.send("> Can't Wait to Message to your friends? Download Escargot @ https://escargot.log1p.xyz !");
        return message.channel.send("Check your DM's.");
    }

    if (command === "invite") {
        message.delete().catch(console.error);
        return message.author.send({ embed: Invite.embed }).catch(() => {});
    }

    if (command === "about") {
        message.delete().catch(console.error);
        return message.author.send({ embed: about.embed }).catch(() => {});
    }

    if (command === "contact") {
        if (args.length < 1) return message.channel.send("> Usage:\n> !contact <contact/list> <list page #>");
        
        switch (args[0]) {
            //contacts first
            case "TailsEraYT":
            return message.channel.send({ embed: contacts.TailsEraYT.embed });
            case "naidru":
                return message.channel.send({ embed: contacts.Naidru.embed });
            case "sprtcrnbry":
                return message.channel.send({ embed: contacts.sprtcrnbry.embed });
            case "warlordoverdriv":
                return message.channel.send({ embed: contacts.warlordoverdriv.embed });
            case "add":
                return message.channel.send({ embed: add.embed });
          case "list":
            if (args.length > 1) {
              switch (args[1]) {
                case "1":
                  return message.channel.send({ embed: list.page1.embed });
                default:
                  //deal with cases where a page that doesnt exist is given
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

// FORK NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file.
client.login(process.env.token);
