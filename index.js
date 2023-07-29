require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.command('blockchain', (ctx)=>ctx.reply('Blockchain'));

bot.on('sticker', (ctx) => ctx.reply(''))
bot.launch();