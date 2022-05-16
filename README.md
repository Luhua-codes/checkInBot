# Chibi, a zine check in bot
Discord bot to schedule, ping, and assign roles for zine contributor check-ins

## Info
This bot operates exclusively through slash commands.  
In a Discord channel, either type `/`, or click on the plus button and select "Use Slash Command" to utilize the bot.  

![image](https://user-images.githubusercontent.com/53491467/168551128-2b6088c1-4c9a-48ec-961d-5b02596ed808.png)

## Commands
### /beep
Replies with "Boop!"

### /ping
Replies with "Pong!"

### /server
Replies with server information:
- server name
- number of members
- date created
- server description

### /user
Replies with user information:
- Avatar link
- User name and discriminator

By default, Chibi provides information about the user that executes the command. If the `target` option is selected and filled, information will instead be provided about the target user.
