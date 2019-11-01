const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("637240970949296128")
setInterval(function() {
channel.send(` 777  فووووووووق اكو قحاب بالسيرفرhttp://cdn-webimages.wimages.net/050810e1feb1c961748111c698508310cc5071-wm.jpg?v=3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
