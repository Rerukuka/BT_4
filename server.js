const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


// Создаем экземпляр приложения
const app = express();
const port = 3000;

// Используем CORS и middleware для парсинга JSON
app.use(cors());
app.use(express.json());

// Статические файлы (например, index.html, styles.css, и скрипты)
app.use(express.static(path.join(__dirname, 'public')));  // Указываем директорию с статическими файлами

// Настройка загрузки файлов с использованием Multer
const upload = multer({
  dest: 'uploads/',  // Папка для сохранения загруженных файлов
  limits: { fileSize: 50 * 1024 * 1024 },  // Ограничение на размер файла (50MB)
});

// Модели (можно заменить на базу данных)
let models = [];

// API для получения моделей
app.get('/api/getModels', (req, res) => {
  res.json(models);
});

// API для создания новой модели
app.post('/api/createModel', upload.single('file'), (req, res) => {
  const { name, description, price, seller } = req.body;  // Получаем данные из тела запроса
  const file = req.file;

  // Проверка наличия всех обязательных полей
  if (!name || !description || !price || !file || !seller) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newModel = {
    name,
    description,
    price,
    seller, // Получаем адрес продавца
    filePath: path.join(__dirname, 'uploads', file.filename),
  };

  models.push(newModel);
  res.status(201).json(newModel);  // Отправляем модель в ответ
});

// Централизованный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
