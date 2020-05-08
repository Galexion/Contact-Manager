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
    console.log("BS-X Computer Has Been Launched.");
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
    if (command === "contact") {
        if (args[0] === "tailserayt")
            return message.channel.send({ embed: TailsEraYT.embed }).catch(console.error);
        return message.channel.send(">Usage:/n>!contact <user>");
    }

    //Commands Code
    if (command === "website") {
        message.author
            .send("> The EraMedia Website \n Go to https://EraMedia.ml to see our website!")
            .catch(() => {});
        return message.channel.send("Check your DM's.");
    }

    if (command === "server") {
        const server = servers[args.join(" ").toLowerCase()];
        if (!server) {
            message.delete().catch(console.error);
            return message.channel.send("> Usage: \n> !server <region / Server name>");
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
