const TelegramBot = require('node-telegram-bot-api');

// 📦 Твой токен от BotFather
const token = '7603034984:AAH9n7DmxVFStq52NdXnKjWGC-_PIgE5VeA';
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Бот запущен...');

// 🛠 Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const welcomeMessage = `
👋 Привет! Я бот Александра — разработчика сайтов и ботов из Беларуси.
Выбери, что ты хочешь узнать:

/proj — Мои проекты
/price — Мои цены
/contact — Связаться со мной
  `;

  bot.sendMessage(chatId, welcomeMessage);
});

// 📁 Обработчик команды /proj
bot.onText(/\/proj/, (msg) => {
  const chatId = msg.chat.id;

  const projects = `
📌 Вот некоторые мои работы:

1. Vite + React сайт — современный интерфейс
2. CRM-панель — управление клиентами
3. WhatsApp бот — автоматизация ответов
4. Discord бот — модерация серверов
  `;

  bot.sendMessage(chatId, projects);
});

// 💰 Обработчик команды /price
bot.onText(/\/price/, (msg) => {
  const chatId = msg.chat.id;

  const prices = `
💰 Примерные цены:

- Лендинг: от $50
- Telegram-бот: от $70
- WhatsApp интеграция: от $80
- Дизайн + верстка: от $60 за страницу
  `;

  bot.sendMessage(chatId, prices);
});

// 📞 Обработчик команды /contact
bot.onText(/\/contact/, (msg) => {
  const chatId = msg.chat.id;

  const contact = `
📲 Свяжись со мной напрямую:

Telegram: @alex_dev
Email: alex@example.com
GitHub: github.com/alex-dev
  `;

  bot.sendMessage(chatId, contact);
});