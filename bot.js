//reqired
const Discord = require("discord.js");
const client = new Discord.Client();
//events
const help = require("./events/help");
const contacts = {
    TailsEraYT: require("./events/Contacts/TailsEraYT"),
};
const Invite = require("./events/invite");
const prefix = "!";

client.on("ready", () => {
    console.log("Escargot Manager Has Been Launched.");
    client.user.setActivity("on Servers! || !help");
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
        return message.channel.send({ embed: contacts.TailsEraYT.embed }).catch(console.error);
    }
    

    //Commands Code
    if (command === "website") {
        message.author
            .send("> Can't Wait to Message to your friends? Download Escargot @ https://escargot.log1p.xyz !")
            .catch(() => {});
        return message.channel.send("Check your DM's.");
    }

    if (command === "contact") {
        const contact = contacts[args.join(" ").toLowerCase()];
        if (!contact) {
            message.delete().catch(console.error);
            return message.channel.send( embed: contacts.embed);
        }

        return message.channel.send({ embed: server.embed });
    }

    if (command === "invite") {
        message.delete().catch(console.error);
        return message.author.send({ embed: Invite.embed }).catch(() => {});
    }
});

//ignore

// FORK NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file.
client.login(process.env.token);
