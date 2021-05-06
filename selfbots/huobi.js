/* eslint-disable max-len */
const { Client } = require('../discordjs/discordjs');
const Discord = require('discord.js')

const bot = new Client({ partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'CHANNEL', 'USER'] });
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'CHANNEL', 'USER'] });

let targetGuild;

bot.on('ready', async () => {
  console.log('bot is now ready!')
  targetGuild = bot.guilds.get('831194785825030185')
})

const bannedWords = ['https://']

bot.on('message', async (message) => {
  console.log(message.content)
  if (message.author.bot)
    return;

  let isBadWord = bannedWords.some((word) => message.content.toLowerCase().includes(word))
  if (isBadWord) {
    message.channel.send('user to be banned')
    targetGuild.members.get(message.author.id).ban();
  }
});

bot.on('ready', async () => {
  console.log('bot is now ready!')
  targetGuild = bot.guilds.get('831194785825030185')
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {
  if (newMember.nickname !== oldMember.nickname) {
    const found = newMember.guild.members.array().find(m => {
      console.log(m.nickname || m.user.username, (newMember.nickname || newMember.user.username))
      if ((m.nickname || m.user.username).toLowerCase() === (newMember.nickname || newMember.user.username).toLowerCase() && m.id !== newMember.id)
      return true;
      return false;
    })
    console.log(found)
    if (found) {
      newMember.ban();
    }
  }
});

// ACCOUNT BOT TOKEN HERE
bot.login('');

// OFFICIAL BOT TOKEN HERE
client.login('');