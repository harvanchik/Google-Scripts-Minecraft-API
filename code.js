/**
* Retrieve the most recent username associated with the UUID.
*
* @param {"f5d5c301-9ad3-4cb4-9cfd-a6b78e67734a"} uuid The UUID of the player.
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
* @param {"Flashee"} username The username of the player.
* @param {"7/21/2020"} date [OPTIONAL] - The time in history to search for said username.
* @return {string} UUID.
* @customfunction
*/
function GETUUID(username, date) {
  try {
    if (date != null) {
      date = new Date(date).getTime() / 1000;
      return JSON.parse(UrlFetchApp.fetch("https://api.mojang.com/users/profiles/minecraft/" + username.toString() + "?at=" + date)).id;
    } else {
      var url = 'https://api.ashcon.app/mojang/v2/user/' + username;
      var playerJSON = UrlFetchApp.fetch(url.toString());
      var playerObject = JSON.parse(playerJSON);
      return playerObject.uuid;
    }
  } catch (e) {
    throw new Error('Username not found');
  }
}
