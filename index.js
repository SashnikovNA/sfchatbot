import { Telegraf, Markup } from 'telegraf';
import { config } from 'dotenv';
import posts from './posts.js';
config();

const bot = new Telegraf(process.env.BOT_TOKEN);

//message 1

const Keyboard_1 = [[
    { text: 'Приступаем!', callback_data: 'go_to_2' },
    Markup.button.url("По ссылке", "https://covid19.who.int/") 
]];

bot.start(
    (ctx) => {
        ctx.replyWithHTML(posts.post1, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_1 })});
    }
);

//message 2

const Keyboard_2 = [[
    { text: 'Подключаем к теории практику - рутина месяца', callback_data: 'go_to_3' }]];

bot.action('go_to_2', (ctx) => {
    ctx.replyWithAudio({ source: './3.1_определяем свой уровень ресурсности.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post2, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_2 })});
    });
} );

//message 3
const Keyboard_3 = [[
    { text: 'Рутина месяца (практика) - суть', callback_data: 'go_to_4' }]];
    
bot.action('go_to_3', (ctx) => {
    ctx.replyWithVoice({ source: './SZ_resource_#3.2_результат.m4a'}).then(() => {
        ctx.replyWithHTML(posts.post3, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_3 })});
    });
} );


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));