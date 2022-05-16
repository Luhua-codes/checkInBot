const fs = require('node:fs'); //node native file system module
const path = require('node:path'); //node native path utility module
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
//NOTE: module.exports used export data in Node.js so you can require() it in other files

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Create a new client instance
client.once('ready', () => {
	console.log('Ready!'); //client is ready
});

client.commands = new Collection(); //allow access to commands in other files
const commandsPath = path.join(__dirname, 'commands'); //access commands folder
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); //get all .js files
for (const file of commandFiles) { //for each item returned in commandFiles
	const filePath = path.join(commandsPath, file); //get file path to this file
	const command = require(filePath); //import this file
	client.commands.set(command.data.name, command); //add key value pair of command name and command file to collection map of commands
}

client.on('interactionCreate', async interaction => { //listen for interactions
	if (!interaction.isCommand()) return; //return if interaction is not a valid command
	const command = client.commands.get(interaction.commandName); //retrieve matching command from collection
	if (!command) return; //return if command is undefined

	try {
		await command.execute(interaction); //use command file's execute block
	} catch (e) {
		console.error(e); //log error
		await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);