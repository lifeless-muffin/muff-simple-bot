require('dotenv').config()
const {Client, GatewayIntentBits} = require('discord.js');
const attack = require('./commands/attack');
const defaultCommand = require('./commands/default');
const health = require('./commands/health');
const help = require('./commands/help');
const start = require('./commands/start');

const intents = [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
]

const client = new Client({intents});

client.on('ready', () => {
  console.log(`Client connected as ${client.user.tag}`);
})

client.on('messageCreate', (message) => {
  if (!message.content.startsWith('$')) {return;} 

  if (message.content.startsWith('$attack')) {
    return attack(message);
  }

  else if (message.content.startsWith('$')) {
    switch(message.content.slice(1)) {
      case 'start': 
        return start(message);
      case 'help':
        return help(message);
      case 'health':
        return health(message);
      default:
        return defaultCommand(message);
    }
  }
})

client.login(process.env.BOT_TOKEN);
