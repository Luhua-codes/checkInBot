const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with link to bot guide'),
	async execute(interaction) {
		const commandsList = new MessageEmbed()
			.setTitle('Commands List')
			.setURL('https://github.com/Luhua-codes/checkInBot/blob/main/README.md#commands')
			.addFields(
				{ name: '/beep', value: 'Replies with "Boop!"' },
				{ name: '/help', value: 'Replies with the list of commands and their descriptions' },
				{ name: '/ping', value: 'Replies with "Pong!"' },
				{
					name: '/server', value: 'Replies with server information:\n' +
						'- server name\n' +
						'- number of members\n' +
						'- date created\n' +
						'- server description',
				},
				{name: '/user', value: 'Replies with user information:\n' +
						'- Avatar link\n' +
						'- User name and discriminator\n' +
						'By default, Chibi provides information about the user that executes the command. If the `target` option is selected and filled, information will instead be provided about the `target` user.'})
			.setTimestamp();

		await interaction.reply({ embeds: [commandsList] });
	},
};

//TODO: Update list of commands at publishing