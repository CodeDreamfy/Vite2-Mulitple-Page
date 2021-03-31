/*
 * @Author: your name
 * @Date: 2021-03-30 14:13:28
 * @LastEditTime: 2021-03-30 14:52:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite2-mulitple-page/src/pages/home/index.js
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/index.css';
import App from './App.vue';

createApp(App).use(ElementPlus).mount('#app');
