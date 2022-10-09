const { getPlayer } = require("../database/users");

function health (message) {
  const result = getPlayer(message.author.id);
  message.reply(result.message);
}
    
module.exports = health;