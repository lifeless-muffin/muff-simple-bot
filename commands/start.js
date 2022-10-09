const { createNewUser } = require("../database/users");

async function start (message) {
  const player = await createNewUser(message.author);

  if (player.success) {
    return message.reply(`New player created successfully`);
  } else {
    return message.reply('Player already exists');
  }
}
    
module.exports = start;