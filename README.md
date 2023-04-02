# MarkinProject
![alt text](https://github.com/Vadi2016/MarkinProject/blob/main/web/index.png)
## Описание
Реализовали среду для аналитики, где на карте отображается общая информация по инцидентам
с некачественными товарами в стране

Можно применить фильтры и подробно рассмотреть конкретные случаи

Для анализа доступна подробная карточка, где можно просмотреть информацию о товаре, магазине, подробный путь товара и контактные данные логистического центра, где произошло нарушение. Также доступна история подобных случаев в этом логистическом центре

Есть возможность выгрузить отчет и отправить по почте

## Теребования для web
- node v18.15.0
- Next.js 13

## Как это работает
Для запуска для разработки выполните:
```bash
cd ./web/app && npm install
cd ./web/app && npm run dev
```
Запуститься сервер на http://0.0.0.0:3000 можно щелкнуть на нем и в браузере долже открыться страница с контентом

## Сборка проекта
Сборка происходит в папку `./web/app/dist`
```bash
cd ./web/app && npm run build
```

### Docker
С помощь докера можно развернуть продукт локально для этого надо выполнить следущущю команду:
```bash
docker-compose up --build
```

