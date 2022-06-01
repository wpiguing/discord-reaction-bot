require('dotenv').config();

const { Client, Intents, DMChannel, MessageReaction  } = require('discord.js');
const client = new Client({	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
   });

client.on('messageReactionAdd', async (reaction, user) => {

	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			return;
		}
	}
  
  const emojiName = reaction.emoji.name;
  const emojiId = reaction.emoji.id;
  const member = user.username;
  const msgAuthor = reaction.message.author;
  if (emojiId != null) {
    msgAuthor.send(`${member} reacted with <:${emojiName}:${emojiId}> to your message in Our Discord.` )
  } else {
    msgAuthor.send(`${member} reacted with ${emojiName} to your message in Our Discord.` )
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);