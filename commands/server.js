const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server name, number of members, date created, and description'),
	async execute(interaction) {
		const name = interaction.guild.name;
		const numMembers = interaction.guild.memberCount;
		const createdDate = interaction.guild.createdAt;
		const description = interaction.guild.description == null ? 'No description set' : interaction.guild.description;
		await interaction.reply(`**Server name**: ${name}\n**Total members**: ${numMembers}\n**Server created on**: ${createdDate}\n**Server description**: ${description}`); //backtick instead of single quotes allows use of template strings
	},
};