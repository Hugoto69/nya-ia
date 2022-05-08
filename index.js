const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

//Bot Token
Client.login(process.env.TOKEN);

//Bot Prefix
const prefix = "!"

//Bot Starting
Client.on("ready", () => {
    //Vérifie si le Bot est en ligne
    console.log("NyaIA Online !")
});

//Bot Rich Presence
client.user.setPresence({
    activities: [{
        name: "!aide",
        type: "playing"
    }],
    status: "online"
});

//Partie IA
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //Bonjour
    if(message.content === prefix + "Bonjour")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "bonjour")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "bjr")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "Bjr")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "Salut")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "salut")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "slt")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "Slt")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "Coucou")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "coucou")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "Cc")
        message.reply("Bonjour Humain ^^");
    else if(message.content === prefix + "cc")
        message.reply("Bonjour Humain ^^");
})