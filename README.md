# My App Template

Шаблон для створення React Native додатків з можливістю переналаштування.

## Налаштування нового додатку

1. Замініть іконки та splash screen у папці `assets`.
2. Запустіть:
   ```bash
   npm run reconfigure "AppName" "com.company.appname" "1.0.0"
   ```

## Структура

my-app-template/
├── src/
│ ├── app/ # Глобальна логіка додатку (навігація, провайдери)
│ ├── entities/ # Бізнес-сутності (наприклад, User, Product)
│ ├── features/ # Функціональні можливості (наприклад, Auth, Settings)
│ ├── pages/ # Екрани додатку
│ ├── shared/ # Спільні утиліти, компоненти, API
├── assets/ # Іконки, splash screens
├── app.config.js # Динамічна конфігурація Expo
├── eas.json # Конфігурація EAS
├── package.json
├── .gitignore
