const fs = require('node:fs'); //node native file system module
const path = require('node:path'); //node native path utility module
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
//NOTE: module.exports used export data in Node.js so you can require() it in other files

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Create a new client instance
client.once('ready', () => {
	console.log('Ready!'); //client is ready
});

client.commands = new Collection(); //allows access to commands in other files

client.on('interactionCreate', async interaction => { //listen for interactions
	if (!interaction.isCommand()) return; //leave method if not command
	const { commandName } = interaction;
});

// Login to Discord with your client's token
client.login(token);