const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const app = express();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`Bot ${client.user.tag} aktif!`);
  client.user.setPresence({
    activities: [{ name: "Sunucuyu yönetiyor", type: 0 }],
    status: "online"
  });
});

client.on("messageCreate", message => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

const token = process.env.TOKEN;
client.login(token);

app.get("/", (req, res) => res.send("Bot çalışıyor!"));
app.listen(3000, () => console.log("Web sunucusu aktif."));
