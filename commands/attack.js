const { findPlayer, findPlayerAndAttack } = require("../database/users");

async function attack (message) {
  if (message.mentions.members.size < 1) { // checking stuff innit 
    return message.reply('You need to mention a member to attack'); 
  }

  const mentionedUser = message.mentions.members.first().user;
  const attackResults = await findPlayerAndAttack(mentionedUser.id, 100);

  return message.reply(attackResults.message);
}

module.exports = attack;