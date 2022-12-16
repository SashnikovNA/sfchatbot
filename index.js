import { Telegraf, Markup } from 'telegraf';
import { config } from 'dotenv';
import posts from './posts.js';
config();

const bot = new Telegraf(process.env.BOT_TOKEN);

//message 1

const Keyboard_1 = [[
    { text: 'Приступаем!', callback_data: 'go_to_2' }
    //,Markup.button.url("По ссылке", "https://covid19.who.int/") 
]];

bot.start(
    (ctx) => {
        ctx.replyWithHTML(posts.post1, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_1 })});
    }
);

//message 2

const Keyboard_2 = [[
    { text: 'К практике', callback_data: 'go_to_3' }]];

bot.action('go_to_2', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Determination of resourcefulness.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post2, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_2 })});
    });
} );

//message 3
const Keyboard_3 = [[
    { text: 'Практика «Рутина месяца»', callback_data: 'go_to_4' }]];
    
bot.action('go_to_3', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Рутина месяца.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post3, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_3 })});
    });
} );

//message 4
const Keyboard_4 = [[
    { text: 'Об уровне ресурсности', callback_data: 'go_to_5' }]];
    
bot.action('go_to_4', (ctx) => {
    ctx.replyWithHTML(posts.post4, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_4 })});
    });


//message 5
// const Keyboard_5 = [[
//     Markup.button.url("Пройти тест ОППР", "https://psy-stop.ru/test-oppr/"),
//     { text: 'Приступаем!', callback_data: 'go_to_6' } 
// ]];

const Keyboard_5 = [ 
    [ Markup.button.url("Пройти тест ОППР", "https://psy-stop.ru/test-oppr/") ],
    [ { text: 'Я прошел тест', callback_data: 'go_to_6' } ]
];
    
bot.action('go_to_5', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Определяем свой уровень ресурсности.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post5, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_5 })});
    });
} );

//message 6
const Keyboard_6 = [[
    { text: 'Шкала психологического стресса', callback_data: 'go_to_7' }]];
    
bot.action('go_to_6', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Обсудим результаты.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post6, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_6 })});
    });
} );

//message 7
const Keyboard_7 = [[
    { text: 'Скрытые угрозы потери ресурса', callback_data: 'go_to_8' }]];
    
bot.action('go_to_7', (ctx) => {
    ctx.replyWithHTML(posts.post7, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_7 })});
    });


//message 8
const Keyboard_8 = [[
    { text: 'Двигаемся дальше', callback_data: 'go_to_9' }]];
    
bot.action('go_to_8', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Неочевидные угрозы потери ресурса.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post8, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_8 })});
    });
} );

//message 9
const Keyboard_9 = [ 
    [ Markup.button.url("Гайд по нормализации сна", "https://psy-stop.ru/son_guide/") ],
    [ Markup.button.url("Определить хронотип", "https://psy-stop.ru/test-horn-ostberg/") ],
    [ { text: 'Двигаемся дальше', callback_data: 'go_to_10' } ]
];
 
bot.action('go_to_9', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/О физических ресурсах.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post9, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_9 })});
    });
} );

//message 10
const Keyboard_10 = [
    [ { text: 'Поговорим о поведении?', callback_data: 'go_to_11' } ], 
];
 
bot.action('go_to_10', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/О внешних средовых ресурсах.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post10, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_10 })});
    });
} );

//message 11
const Keyboard_11 = [
    [ { text: 'Об эмоциях', callback_data: 'go_to_12_1' } ] 
];
 
bot.action('go_to_11', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/О копинг стратегиях.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post11, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_11 })});
    });
} );

//message 12_1
const Keyboard_12_1 = [
    [ { text: 'Шпаргалка - колесо эмоций', callback_data: 'go_to_12_2' } ]];
 
bot.action('go_to_12_1', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Эмоциональные ресурсы.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post12_1, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_12_1 })});
    });
} );

//message 12_2
const Keyboard_12_2 = [
    [ { text: 'Далее', callback_data: 'go_to_13' } ]];
 
bot.action('go_to_12_2', (ctx) => {
    ctx.replyWithPhoto({ source: './Плутчик Роберт_модель эмоций.jpg'}).then(() => {
        ctx.replyWithHTML(posts.post12_2, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_12_2 })});
    });
} );

    //message 13
const Keyboard_13 = 
[[ { text: 'Личностные ресурсы', callback_data: 'go_to_14' } ]];
 
bot.action('go_to_13', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Когнитивные ресурсы.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post13, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_13 })});
    });
} );


//message 14
const Keyboard_14 = [ 
    [ Markup.button.url("Определить тип темперамента", "https://psytests.org/eysenck/epqRS-run.html") ],
    [ Markup.button.url("Экспресс-диагностика", "https://psytests.org/leonhard/sm88-run.html") ],
    [ { text: 'Двигаемся дальше', callback_data: 'go_to_15' } ]
];
 
bot.action('go_to_14', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Личностные ресурсы.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post14, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_14 })});
    });
} );

//message 15
const Keyboard_15 = [ 
    [ { text: 'Упражнение «четыре выгоды»', callback_data: 'go_to_16' } ]
];
 
bot.action('go_to_15', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Социальные ресурсы.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post15, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_15 })});
    });
} );

//message 16
const Keyboard_16 = [[ { text: 'К результатам', callback_data: 'go_to_17' } ] ];
 
bot.action('go_to_16', (ctx) => {
    ctx.replyWithHTML(posts.post16, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_16 })});
    });


//message 17
const Keyboard_17 = [ [ { text: 'Давайте о приятном? Хобби', callback_data: 'go_to_18' } ]];
 
bot.action('go_to_17', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Результаты упражнения.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post17, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_17 })});
    });
} );

//message 18
const Keyboard_18 = [[ { text: 'Ценностные ресурсы', callback_data: 'go_to_19' } ]];
 
bot.action('go_to_18', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/О Хобби.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post18, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_18 })});
    });
} );

//message 19
const Keyboard_19 = [ [ { text: 'Вопросы для задания', callback_data: 'go_to_20' } ]];
 
bot.action('go_to_19', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/О ценностных ресурсах.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post19, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_19 })});
    });
} );

//message 20
const Keyboard_20 = [ [ { text: 'Перейти ко второй части практики', callback_data: 'go_to_21' } ]];
 
bot.action('go_to_20', (ctx) => {
ctx.replyWithHTML(posts.post20, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_20 })});
});

//message 21
const Keyboard_21 = [[ { text: 'Перейти к третьей части практики', callback_data: 'go_to_22' } ]];
 
bot.action('go_to_21', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Инструкция для второй части.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post21, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_21 })});
    });
} );

//message 22
const Keyboard_22 = [[ { text: 'Перейти к четвертой части практики', callback_data: 'go_to_23' } ]];
 
bot.action('go_to_22', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Инструкция к третьей части.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post22, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_22 })});
    });
} );

//message 23
const Keyboard_23 = [[ { text: 'Подведем итоги', callback_data: 'go_to_24' } ]];
 
bot.action('go_to_23', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Инструкция к четвертой части.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post23, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_23 })});
    });
} );

//message 24
const Keyboard_24 = [
    [ Markup.button.url("Оставить отзыв", "https://ya.ru") ]
];
 
bot.action('go_to_24', (ctx) => {
    ctx.replyWithAudio({ source: './Audio/Подведем итоги.mp3'}).then(() => {
        ctx.replyWithHTML(posts.post24, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_24 })});
    });
} );

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

//template

// //message N
// const Keyboard_N = [
//     [ { text: '***', callback_data: 'go_to_N+1' } ]
//     , [ Markup.button.url("Пройти тест ОППР", "https://psy-stop.ru/test-oppr/") ]
// ];
 
// bot.action('go_to_N', (ctx) => {
//     ctx.replyWithAudio({ source: './Audio/Рутина месяца.mp3'}).then(() => {
//         ctx.replyWithHTML(posts.post3, {reply_markup: JSON.stringify({ inline_keyboard: Keyboard_N })});
//     });
// } );