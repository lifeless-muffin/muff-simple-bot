let usersList = []

const createNewUser = (user) => {
  const foundUser = usersList.filter(item => item.id === user.id);
  if (foundUser.length > 0) {
    return {
      success: false,
      message: 'Player already exists'
    }
  }

  let userCreatedAt = Date.now(); // time that new user is created
  let userDefence = {userHp: 10000}  // this is not exactly how it's supposed to be done... but it's just a task so... it's okay ig
  let userAttack = {attackDamage: 100}  // this could also be the skills, but it could get much more messier
  let userCopy = {...user, userDefence, userAttack, createdAt: userCreatedAt};
  usersList.push(userCopy);

  return {success: true, message: 'New player created successfully', player: userCopy};
}

const findPlayerAndAttack = (userId, damage) => {
  const userIndex = usersList.findIndex(item => item.id === userId); 
  if (userIndex < 0) {return {success: false, message: 'Player not found',}}

  let playerHp = usersList[userIndex].userDefence.userHp;
  playerHp = playerHp - damage;
  usersList[userIndex].userDefence.userHp = playerHp;

  return {
    success: true,
    message: `You have dealt ${damage} damage to ${usersList[userIndex].username}`,
  }
}

const getPlayer = (userId) => {
  const player = usersList.find(item => item.id === userId);
  if (!player) {
    return {
      success: false,
      message: 'Player does not exist, use $start to create new player'
    }
  } else {
    return {
      success: true,
      message: `Your player HP: ${player.userDefence.userHp}`
    }
  }
}


module.exports = {createNewUser, findPlayerAndAttack, getPlayer};