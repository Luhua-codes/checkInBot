const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with link to bot guide'),
	async execute(interaction) {
		const commandsList = new MessageEmbed()
			.setTitle('Commands List')
			.setDescription('Visit the [docs](https://github.com/Luhua-codes/checkInBot/blob/main/README.md#commands) for more details.')
			.addFields(
				{ name: '/beep', value: 'Replies with "Boop!"' },
				{ name: '/help', value: 'Replies with the list of commands and their descriptions' },
				{ name: '/ping', value: 'Replies with "Pong!"' },
				{ name: '/server', value: 'Replies with server information' },
				{ name: '/user', value: 'Replies with user information' })
			.setTimestamp();

		await interaction.reply({ embeds: [commandsList] });
	},
};

//TODO: Update list of commands at publishing