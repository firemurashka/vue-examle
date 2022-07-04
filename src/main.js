//createApp - функция, с помощью которой создается экземпляр приложения
import {
    createApp
} from 'vue'

import App from './App'
//параметром в эту функцию передаем корневой компонент App
//mount - возвращает экземпляр корневого компонента
createApp(App).mount('#app')
    //#app - куда мы монтируем приложение в div с id=app в index.html