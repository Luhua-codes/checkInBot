const fs = require('node:fs'); //node native file system module
const path = require('node:path'); //node native path utility module
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
//NOTE: module.exports used to export data in Node.js so you can require() it in other files

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Create a new client instance

client.commands = new Collection(); //allow access to commands in other files
const commandsPath = path.join(__dirname, 'commands'); //access commands folder
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); //get all .js files
for (const file of commandFiles) { //for each item returned in commandFiles
	const filePath = path.join(commandsPath, file); //get file path to this file
	const command = require(filePath); //import this file
	client.commands.set(command.data.name, command); //add key value pair of command name and command file to collection map of commands
}

//Event handler
const eventsPath = path.join(__dirname, 'events'); //https://discordjs.guide/creating-your-bot/event-handling.html#reading-event-files
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for(const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if(event.once){
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login to Discord with your client's token
client.login(token);