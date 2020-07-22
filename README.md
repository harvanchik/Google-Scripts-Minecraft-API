# Google Scripts Minecraft API
The **Google Scripts Minecraft API** provides two custom formulas to use within the Google Spreadsheet.
## GETIGN()
The `GETIGN()` function will return a players Minecraft IGN (in-game username) when the given argument is a UUID (Unique User Identification).  A player's UUID can be found on sites like [namemc.com](https://namemc.com/profile/Flashee.1).
### Usage:
`GETIGN(uuid) -> username`
### Example:
Typing `GETIGN("f5d5c301-9ad3-4cb4-9cfd-a6b78e67734a")` in a cell will return `Flashee`.  You can use the **hyphenated** UUID or the **unhyphenated** one.

***

## GETUUID()
An alternative to using [namemc.com](https://namemc.com), you can use the `GETUUID()` function.  It will return a players Minecraft UUID when the given argument is the username.  

Because Minecraft allows for name changes, it is possible that a username could result in two UUIDs.  By default, the function will return the current UUID attached to the username.  To specify the date in which to check, simply add the date as the second argument.
### Usage:
`GETUUID(username, date) -> uuid`
### Example:
Typing `GETUUID("Flashee")` in a cell will return `f5d5c301-9ad3-4cb4-9cfd-a6b78e67734a`.  To specify a date, type `GETUUID("Flashee", "7/21/2020")`.  This will check for the UUID of that username on that date.


