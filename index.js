// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json'); //module.exports used export data in Node.js so you can require() it in other files

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => { //listen for interactions
	if (!interaction.isCommand()) return; //leave method if not command

	const { commandName } = interaction;

	if (commandName === 'ping') { //strict equality, always considers objs of different types to be !=
		await interaction.reply('Pong!');
	}else if(commandName === 'beep'){
		await interaction.reply("Boop!");
	}
	else if (commandName === 'server') {
		await interaction.reply(`**Server name**: ${interaction.guild.name}\n**Total members**: ${interaction.guild.memberCount}\n**Server created on**: ${interaction.guild.createdAt}\n**Server description**: ${interaction.guild.description == null ? 'No description set' : interaction.guild.description}`); //backtick instead of single quotes allows use of template strings
	}
	else if (commandName === 'user') {
		await interaction.reply(`${interaction.user.avatarURL()}\n**Your tag**:${interaction.user.tag}`);
	}
});

// Login to Discord with your client's token
client.login(token);