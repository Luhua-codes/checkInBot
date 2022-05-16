const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user avatar link and tag'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.avatarURL()}\n**Your tag**: ${interaction.user.tag}`);
	},
};

//TODO later: add option to specify user to provide info on https://discordjs.guide/interactions/slash-commands.html#options