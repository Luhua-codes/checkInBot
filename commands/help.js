const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with link to bot guide'),
	async execute(interaction) {
		await interaction.reply('https://github.com/Luhua-codes/checkInBot/blob/main/README.md#commands');
	},
};