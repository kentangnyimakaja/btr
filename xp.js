const Discord = require("discord.js");
const path = require('path')
const { Collection, Client, Message } = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const newUsers = new Discord.Collection();
var botMembers = 0;
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const queue = new Map();
const config1 = require('./utils/gw-config.json');
const client = new Discord.Client({ fetchAllMembers: true, messageCacheMaxSize: 5 });
client.slash = require("./utils/slash-commands.js");
module.exports = client;
const http = require("http");
console.log("\nLoading...");
console.log("If This Take Too long make sure u have add right token!");
const api = require('novelcovid');
const moment = require('moment');
client.config = config1;
const config = require("./config.js");
const AmeClient = require("amethyste-api");
client.util = require('./utils/chat-bot-main.js');
const { mainprefix, token, color } = require("./config.js");
const yaml = require("js-yaml");
const chalk = require("chalk");
client.config = config;
const { rejects } = require('assert')
const { join } = require("path");
const { readdirSync } = require("fs");

// TypeScript: impor interaksi dari "discord-slash-commands-client";

// akan membuat perintah baru dan mencatat datanya. Jika perintah dengan nama ini sudah ada, apakah itu akan ditimpa.

client.on('ready', () => {
  var arrayOfStatus = [
    `${client.users.cache.size} pengguna`,//change this with your status
    `==help untuk command lebih lanjut!`,//change this with your status
    `${client.guilds.cache.size} Servers!!`,
    `${db.fetch(`status`)}`
  ];
  setInterval(() => {
    var arrayOfStatus = [
      `${client.users.cache.size} pengguna`,//change this with your status
      `==help untuk command lebih lanjut!`,//change this with your status
      `${client.guilds.cache.size} Servers!!`,
      `${db.fetch(`status`)}`
    ];
  }, 60000)

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status);
    index++;
  }, 10000)

  console.log(`masuk sebagai ${client.user.username} BOT ✅`)
  const clientDetail = {
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size
  };

  //express

  const express = require('express');
  const bodyParser = require("body-parser")
  const app = express();
  const PORT = 3031 || 3032;

  app.use(bodyParser.json())
  app.post("/voted", (req, res) => {
    console.log(req.body) // Logs what is posted to this endpoint

    // You may delete the following 4 lines if you did not use a webhook "password" or "authorization"
    // Below replace "WEBHOOKtokenHere" to the webhook "password" that you set
    if (req.header('Authorization') != "indufing$$%(*#%$^$^$^#)#$%$^(BRUHXDINDIAOPYEA THATS WHY XD NO U FUCK") {
      return res.status("401").end(); // Return 401: Unauthorized
    }
    res.status(200).end() // Responds to the post request
  })


  // Start express on the defined port
  app.listen(PORT, () => console.log(`🚀 Server berjalan di port ${PORT}`))


})




client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


const { GiveawaysManager } = require("discord-giveaways");

client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./json db/giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: config1.botsCanWin,
    embedColor: config1.embedColor,
    embedColorEnd: config1.embedColorEnd,
    reaction: config1.reaction
  }
});
// Kami sekarang memiliki properti client.giveawaysManager untuk mengelola hadiah kami!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
  if (member.id !== client.user.id) {
    console.log(`${member.user.tag} mengikuti giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
  }
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
  if (member.id !== client.user.id) {
    console.log(`${member.user.tag} meninggalkan hadiah #${giveaway.messageID} (${reaction.emoji.name})`);
  }
});
client.on("guildMemberAdd", async (member) => {
  let autor = db.fetch(`autorole_${member.guild.id}`);
  if (!autor) {
    return;
  }
  var role = member.guild.roles.cache.get(`${autor}`);
  member.roles.add(role);



});
const alt = require("discord-anti-alt");
const account = new alt.config({
  days: 5,// hanya pengguna yang memiliki usia kurang dari 2 hari yang akan mendapat tendangan
  options: "kick"
});
client.on("guildMemberAdd", async (member) => {
  let antialt = db.fetch(`antialt_${member.guild.id}`);
  if (antialt == "disable" || !antialt || antialt == null) {

    return;
  }



  let play = account.run(member);



});

client.on("guildMemberAdd", async (member) => {

  let message2 = db.fetch(`nickm_${member.guild.id}`);
  if (!message2) {
    return;
  }

  message2 = message2
    .replace("-username-", `${member.user.username}`);
  member.setNickname(message2);

});
client.on("guildMemberAdd", async (member) => {


  if (db.has(`tagg_${member.guild.id}`) && db.has(`tagn_${member.guild.id}`)) {
    let name = db.fetch(`tagn_${member.guild.id}`);
    let hash = db.fetch(`tagg_${member.guild.id}`);
    if (member.user.username.includes(name)) {
      member.roles.add(hash);
    }
  }
})





client.queue = new Map()



const ms = require("parse-ms");




const ReactionRoleManager = require("discord-reaction-role");
// Starts updating currents reaction roles
const manager1 = new ReactionRoleManager(client, {
  storage: "./json db/reaction-role.json"
});
// We now have a reactionRoleManager property to access the manager everywhere!
client.reactionRoleManager = manager1;
client.reactionRoleManager.on('reactionRoleAdded', (reactionRole, member, role, reaction) => {
  console.log(`${member.user.username} menambahkan reaksinya \`${reaction}\` dan mendapatkan role : ${role.name}`);
})

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[Event Load] loading Event ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});





if (config.registercommands === true) {
  async function registerSlashCommands(dir) {
    ;
    fs.readdir(path.join(__dirname, dir), async (err, files) => {
      if (err) {
        return console.log(chalk.red('Terjadi kesalahan saat memeriksa folder perintah untuk memuat perintah: ' + err));
      };
      files.forEach(async (file) => {
        fs.stat(path.join(__dirname, dir, file), (err, stat) => {
          if (err) return console.log(chalk.red('Terjadi kesalahan saat memeriksa folder perintah untuk memuat perintah: ' + err));
          if (stat.isDirectory()) {
            registerSlashCommands(path.join(dir, file));
          } else {
            if (!file.endsWith('.js')) return;
            let commandFile = require(path.join(__dirname, dir, file));
            slashCommandList.push({
              run: commandFile.slashCommand,
              name: file.split('.')[0]
            });
          };
        });
      });
    });
  };
  registerSlashCommands('./commands/');
}

// Welcome BOT
client.on("guildMemberAdd", member => {
  member.send("Selamat datang di Bigetron Discord Server ! \n・✿、Jangan lupa nimbrung di server yah !!! \n\nLink Discord ( Permanen ) : https://discord.gg/btr \nDonate : https://saweria.co/discordbot");

})

// Welcome BOT
client.on("guildMemberAdd", member => {
  const welcome = member.guild.channels.cache.find(welcome => welcome.id === "823591974455738458");
  if (!welcome) return;

  const welcomeembed = new Discord.MessageEmbed()
      .setAuthor("Welcome To Bigetron Discord Server")
      .setDescription(`<a:panah:836455360440827955>  ┃ <:BTR_R:824213977667207196> <#524488247423008770> _read the rules & verify here!_ \n\n<a:panah:836455360440827955>  ┃ <:BTR_R:824213977667207196> <#823592746689626122> _Take your roles_ \n\nmake sure you have verified so you can acces the server!\n\n .☆。• *₊°。 ✮°。.☆。• *₊°。 ✮°。.☆\n\n<a:panah:836455360440827955>  ┃ need help or any question? \n\n<a:panah:836455360440827955>  ┃ well surely ask our <@&823575032936267866> / <@&823575241245720597> / <@&823575748857167934> !`)
      .setColor("#d1a0f7")
      .setFooter('Copyright By Bigetron BOT @2021', 'https://files.catbox.moe/n6p96o.jpg') // sets a footer
      .setTimestamp() // put when the msg got sent
      .setImage('https://files.catbox.moe/3vntm1.jpg')

  welcome.send(`<:BTR_R:824213977667207196> ❜ ─  Welcome <@${member.id}> To Bigetron Discord Server! ─ ❛ <:YELL_BTR:762391532543279114> <:YELL_WIN:762391563879841802>`);
  welcome.send(welcomeembed)
})

// DM Log
client.on("message", async (message, guild) => {

  if (message.author.Client) return;
  if (message.channel.type === "dm") {
      const dmEmbed = new Discord.MessageEmbed()
          .setTitle('New DM')
          .setColor("RANDOM")
          .setTimestamp()
          .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content:** \`\`\`${message.content}\`\`\``)

      const DMC = client.channels.cache.get('894085734531751937')
      DMC.send(dmEmbed)
  }
})

// Pesan berulang
client.on("ready", async () => {
  // 750033583074312293
  setInterval(() => {
    const UltraX = new Discord.MessageEmbed()
      .setTitle('Informasi Mengenai Developer Discord BOT !!!') // sets the title for the embed
      .setURL('https://saweria.co/discordbot')
      .setDescription(`Mau tau apa saja tentang Pembuat BOT ini ?. Berikut kita simak pembahasan profile nya di bawah ini.`) // sets the description
      .setColor('#00ff00') // color
      .setThumbnail('https://files.catbox.moe/v3c6qw.jpeg') // sets the thumbnail 
      .setImage('https://files.catbox.moe/oao4c3.jpeg') // sets an image 
      .setFooter('Copyright By Bigetron BOT @2021', 'https://files.catbox.moe/n6p96o.jpg')
      .addFields(
        { name: 'Link Instagram', value: 'https://www.instagram.com/rahmat_stop/', inline: true }, // Fields, inline: true mean they will be in the same line
        { name: 'Link Discord Server', value: 'https://linktr.ee/discordrahmat', inline: true },
        { name: 'Link Portofolio Discord BOT', value: 'https://docs.google.com/presentation/d/1btigB-HweCtX77GA6jKf1k0Ai9u7I3zob61_TnhiTX8/edit?usp=sharing', inline: true },
        { name: 'Link Saweria Discord BOT', value: 'https://saweria.co/discordbot' })
      .setTimestamp() // put when the msg got sent
    var generalChannel = client.channels.cache.get('750033583074312293');
    generalChannel.send(UltraX)
  }, "10800000");
})

// Say BOT
client.on("message", async (message, guild) => {

  if (message.content.toLocaleLowerCase() === 'btr')
      message.reply('WIN!!!');

  else if (message.content.toLocaleLowerCase() === 'p')
      message.reply('pap papepapepap pap pepap pudidi papap 🤙🤙🤙🤙');

  else if (message.content.toLocaleLowerCase() === 'sappo')
      message.reply('Woiiii anak muda');

  else if (message.content.toLocaleLowerCase() === 'woi sappo')
      message.reply('Woiiii anak muda');

  else if (message.content.toLocaleLowerCase() === 'selo')
      message.reply('se se selo pa seeelooooooooo anak muda ko lawan maninggal ko de de de deee istipar ko');

  else if (message.content.toLocaleLowerCase() === 'pagi')
      message.reply('Pagi juga sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'siang')
      message.reply('Siang juga sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'sore')
      message.reply('Sore juga sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'malam')
      message.reply('Malam juga sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'subuh')
      message.reply('Masih tidur orang sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'maghrib')
      message.reply('Shalat orang sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'petang')
      message.reply('Anak senja kah sappoo de de de de deeee');

  else if (message.content.toLocaleLowerCase() === 'saya tampan tidak ?')
      message.reply('masih kalah jauh 🤣');

  else if (message.content.toLocaleLowerCase() === 'bernyanyi')
      message.reply('berbernyanyi bernyanyi 🤙💪');

  else if (message.content.toLocaleLowerCase() === 'ig')
      message.reply('ganteng doang gak follow sosial media bigetron');

})


client.login(config.token);