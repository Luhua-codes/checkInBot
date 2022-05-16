const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user avatar link and tag')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('The user to return info about; if not specified, will return info about you')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('target') == null ? interaction.user : interaction.options.getUser('target');
		const avatarURL = user.avatarURL();
		const userTag = user.tag;
		await interaction.reply(`${avatarURL}\n**User tag**: ${userTag}`);
	},
};