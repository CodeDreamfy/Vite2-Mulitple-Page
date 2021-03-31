/*
 * @Author: your name
 * @Date: 2021-03-30 11:21:01
 * @LastEditTime: 2021-03-30 14:48:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite2-mulitple-page/vite.config.js
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import glob from 'glob';
import fs from 'fs';

const pageEntry = {};

(function generateInput() {
  try {
    const allEntry = glob.sync('./src/views/**/*.js');
    const temp = fs.readFileSync('./index.html');
    if (!fs.existsSync('./templates')) {
      fs.mkdirSync('./templates');
    }
    allEntry.forEach((entry) => {
      console.log('file not exists, star over build ');
      const index = temp.toString().indexOf('</body>');
      let content = '';
      if (index !== -1) {
        content =
          temp.toString().slice(0, index) +
          `<script type="module" src=".${entry}"></script>` +
          temp.toString().slice(index);
      }
      const pad = entry.split('/');
      const name = pad[pad.length - 2];
      fs.writeFile(
        `./templates/${name}.html`,
        content,
        { flag: 'a+' },
        (err) => {},
      );
      const key = path.basename(name, '.html');
      const value = path.resolve(__dirname, `/templates/${name}.html`);
      pageEntry[key] = value;
    });
  } catch (e) {
    console.error(e);
  }
})();

console.log('pageEntry', pageEntry);
// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: pageEntry,
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://backend-api-02.newbee.ltd/manage-api/v1',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/api/, '')
    //     }
    //   },
    // }
  });
