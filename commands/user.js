const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user avatar link and tag')
		.addUserOption(option =>
			option.setName('user tag')
				.setDescription('The user to return information about')
				.setRequired(false)),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.avatarURL()}\n**User tag**: ${interaction.user.tag}`);
	},
};