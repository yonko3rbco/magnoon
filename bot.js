const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("637240970949296128")
setInterval(function() {
channel.send(`كي هل هلي كي هل هلي كي هل هلي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);