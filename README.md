node-insales
============
[![Build Status](https://api.travis-ci.org/pomeo/node-insales.png)](http://travis-ci.org/pomeo/node-insales)
[![Code Climate](https://codeclimate.com/github/pomeo/node-insales.png)](https://codeclimate.com/github/pomeo/node-insales)
[![Coverage Status](https://img.shields.io/coveralls/pomeo/node-insales.svg)](https://coveralls.io/r/pomeo/node-insales)

В будущем node.js модуль для работы с [API insales.ru](https://wiki.insales.ru/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B_API).
Нужно оттестировать пару приложений в маркете, чтобы понять как лучше спроектировать модуль.

На данный момент имеем:
* Количество запросов к API ограничено 500 запросов за 5 минут. Нужна очередь, лучше всего подойдёт [kue](https://github.com/learnboost/kue).
* Из первого вытекает, что нужно два варианта использования очереди, запросы каждые ~0.6 секунды или все 500 раз в 5 минут, либо комбинация этих способов.
* На примере работы с купонами приоритеты в очереди должны быть такими: удаление самый низкий приоритет; создание средний приоритет; изменение высокий приоритет.

Материал:  
http://nodejs.org/docs/latest/api/modules.html  
https://www.npmjs.org/doc/cli/npm-link.html  
https://github.com/danwrong/restler  
https://github.com/learnboost/kue  
https://github.com/appsattic/node-coupon-code
