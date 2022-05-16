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
				{name: '/command1', value:'descript1'},
				{name: '/command2', value:'descript2'})
			.setTimestamp();

		await interaction.reply({embeds: [commandsList]});
	},
};

//TODO: Update list of commands