## Техническое задание:

Нужно сверстать онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.
АПИ: https://api.nasa.gov (https://api.nasa.gov/) Asteroids - NeoWs

На главной список подлетов астероидов к Земле от текущей даты в бесконечность. Подгрузка при скролле порциями. 

По каждому астероиду: 
- название,
- размер,
- оценка опасности,
- как близко будет к Земле,
- точная дата максимального подлёта.

Иконка сближения в зависимости от опасности.
Фильтр по опасности.
Опция вывода расстояний: в километрах или расстояниях до Луны.

В фоне шапки есть изображение, которое должно быть получено в API NASA APOD (картинка дня).

Адаптивная вёрстка.

В подробной информации по астероиду помимо инфы, перечисленной выше, список всех его сближений. 

По каждому сближению:
- скорость относительно Земли,
- время максимального сближения с Землей,
- расстояние до Земли, по орбите вокруг чего летит.

В списке и на странице астероида есть кнопка добавления астероида в список на уничтожение.

Список на уничтожение — это некая корзина, где отображаются выбранные подлеты астероидов.
В конце страницы кнопка заказа бригады им. Брюса Уиллиса на выбранные астероиды.
Бригада будет доставлена на астероид в нужный момент и выполнит свою нелёгкую работу.

Дизайн-макет отрисован только для первой страницы, остальные две вы делаете на своё усмотрение.
https://www.figma.com/file/WzShoPTXgKE2bWl7B4mQmK/Armaggedon-V2-(Copy)?node-id=0%3A1

- Использовать Next.js (также принимаются решения на React, если будет реализован SSR);
- Использование redux нежелательно;
- Стилизация с помощью CSS модулей;
- Решение предоставить в виде git репозитория (github/bitbucket/gitlab по выбору);
- Корректное отображение в последних версиях браузеров (chrome, firefox, safari, edge);

Будет плюсом:

- использование TypeScript;
- тесты;
- если вы задеплоите ваш проект на любой удобный для вас хостинг;
- документация/инструкция по сборке проекта (README);

## Для запуска проекта:
В строке терминала набрать команды:
```
git clone https://github.com/nskpsv/nasa-app.git
cd nasa-app
npm i
npm run dev
```
В браузере открыть адрес http://localhost:3000
