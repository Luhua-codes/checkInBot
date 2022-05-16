const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server name, number of members, date created, and description'),
	async execute(interaction) {
		await interaction.reply(`**Server name**: ${interaction.guild.name}\n**Total members**: ${interaction.guild.memberCount}\n**Server created on**: ${interaction.guild.createdAt}\n**Server description**: ${interaction.guild.description == null ? 'No description set' : interaction.guild.description}`); //backtick instead of single quotes allows use of template strings
	},
};