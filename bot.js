const TelegramBot = require('node-telegram-bot-api');

// 🔐 Твой токен от BotFather
const token = '7603034984:AAH9n7DmxVFStq52NdXnKjWGC-_PIgE5VeA';
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Бот запущен...');

// Главное меню с кнопками
function mainMenu() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '💼 Мои проекты', callback_data: 'projects' }],
        [{ text: '💰 Стоимость услуг', callback_data: 'prices' }],
        [{ text: '📲 Связь со мной', callback_data: 'contact' }]
      ]
    }
  };
}

// Приветствие по команде /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `
👋 Привет! Я бот Александра — разработчика сайтов и ботов из Беларуси

Выбери, что тебе нужно:
• Посмотреть мои работы
• Узнать стоимость услуг
• Написать мне напрямую

📌 Жми на нужную кнопку ниже.
  `, mainMenu());
});

// Команда /proj — показываем проекты
bot.onText(/\/proj/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `
📌 Вот некоторые из моих работ:

1. Vite + React сайт — современный интерфейс
2. CRM-панель — управление клиентами
3. WhatsApp бот — автоматизация ответов
4. Discord бот — модерация серверов
  `);
});

// Команда /price — цены
bot.onText(/\/price/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `
💰 Примерные цены:

- Лендинг: от $50
- Telegram-бот: от $70
- WhatsApp интеграция: от $80
- Дизайн + верстка: от $60 за страницу
  `);
});

// Команда /contact — контакты
bot.onText(/\/contact/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `
📲 Свяжись со мной напрямую:

Telegram: @alex_dev  
Email: alex@example.com  
GitHub: github.com/alex-dev
  `);
});

// Обработчик кнопок (callback_query)
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'projects') {
    bot.editMessageText(`
📌 Вот некоторые из моих работ:

1. Vite + React сайт — современный интерфейс
2. CRM-панель — управление клиентами
3. WhatsApp бот — автоматизация ответов
4. Discord бот — модерация серверов

⬅️ Назад`, mainMenu(), {
      chat_id: chatId,
      message_id: query.message.message_id
    });
  }

  if (data === 'prices') {
    bot.editMessageText(`
💰 Примерные цены:

- Лендинг: от $50
- Telegram-бот: от $70
- WhatsApp интеграция: от $80
- Дизайн + верстка: от $60 за страницу

⬅️ Назад`, mainMenu(), {
      chat_id: chatId,
      message_id: query.message.message_id
    });
  }

  if (data === 'contact') {
    bot.editMessageText(`
📲 Свяжись со мной напрямую:

Telegram: @alex_dev  
Email: alex@example.com  
GitHub: github.com/alex-dev  

⬅️ Назад`, mainMenu(), {
      chat_id: chatId,
      message_id: query.message.message_id
    });
  }

  if (data === 'back') {
    bot.editMessageText(`
👋 Привет! Я бот Александра — разработчика сайтов и ботов из Беларуси

Выбери, что тебе нужно:
    `, mainMenu(), {
      chat_id: chatId,
      message_id: query.message.message_id
    });
  }
});