/**
 * Retrieve the most recent username associated with the UUID.
 *
 * @param {string} uuid
 * @return {string} The most recent username.
 * @customfunction
 */
function GETIGN(uuid) {
  var url = 'https://api.ashcon.app/mojang/v2/user/' + uuid;
  var playerJSON = UrlFetchApp.fetch(url.toString());
  var playerObject = JSON.parse(playerJSON);
  return playerObject.username;
}

/**
 * Retrieve the UUID associated with the username.
 *
 * @param {string} username
 * @return {string} UUID.
 * @customfunction
 */
function GETUSERNAME(username) {
  var url = 'https://api.ashcon.app/mojang/v2/user/' + username;
  var playerJSON = UrlFetchApp.fetch(url.toString());
  var playerObject = JSON.parse(playerJSON);
  return playerObject.uuid;
}
