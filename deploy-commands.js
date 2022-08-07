const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const { clientId, guildId, token } = require('./config.json')


// !!! List with commands !!!
const commands = [
	new SlashCommandBuilder().setName('cock').setDescription('makes something useful i guess idk lol'),
	new SlashCommandBuilder().setName('time-utc').setDescription('Outputs the current UTC time'),
	new SlashCommandBuilder().setName('timezone-add').setDescription('Adds one timezone to your list'),
	new SlashCommandBuilder().setName('timezone-remove').setDescription('Removes one timezone of your list'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token)

/* Only for one guild (guildId in config.json)
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)
*/

// deploys commands globally in every guild
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)