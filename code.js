/**
* Retrieve the most recent username associated with the UUID.
*
* @param {string} uuid
* @return {string} The most recent username.
* @customfunction
*/
function GETIGN(uuid) {
  try {
    var url = 'https://api.ashcon.app/mojang/v2/user/' + uuid;
    var playerJSON = UrlFetchApp.fetch(url.toString());
    var playerObject = JSON.parse(playerJSON);
    return playerObject.username;
  } catch (e) {
    throw new Error('Enter a valid UUID')
  }
  
}

/**
* Retrieve the UUID associated with the username.
*
* @param {string} username
* @return {string} UUID.
* @customfunction
*/
function GETUUID(username) {
  try {
    var url = 'https://api.ashcon.app/mojang/v2/user/' + username;
    var playerJSON = UrlFetchApp.fetch(url.toString());
    var playerObject = JSON.parse(playerJSON);
    return playerObject.uuid;
  } catch (e) {
    throw new Error('Username not found');
  }
}
