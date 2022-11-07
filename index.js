import { Telegraf, Markup } from 'telegraf';
import { config } from 'dotenv';
import posts from './posts.js';
config();

const bot = new Telegraf(process.env.BOT_TOKEN);


//1st message
const Keyboard_1 = [[
    { text: 'Приступаем!', callback_data: 'go_to_2' },
    Markup.button.url("По ссылке", "https://covid19.who.int/") 
]];

const Keyboard_2 = [[
        { text: 'Подключаем к теории практику - рутина месяца', callback_data: 'go_to_3' }]];
    
//const m1 = `Приветствую Вас , ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'} , в Safety Zone!`;

bot.start((ctx) => {
    ctx.sendMessage(posts.post1, { reply_markup: JSON.stringify({ inline_keyboard: Keyboard_1 }), parse_mode: 'MarkdownV2' });
});

bot.action('go_to_2', (ctx) => {
    ctx.replyWithVoice({ source: './SZ_resource_3.1.m4a'}).then(() => {
        ctx.sendMessage(posts.post2, { reply_markup: JSON.stringify({ inline_keyboard: Keyboard_2 }), parse_mode: 'MarkdownV2' });
    });
} );


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));