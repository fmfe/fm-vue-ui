<script>
  export default {
    methods: {
        avatarError(e) {
            return this.$utils.avatarError(e);
        },

        getCurDate () {
            return new Date("2017-12-05T04:26:07.584Z");
        },

        formatDate (formatStr = '') {
            return this.$utils.formatDateToStr(new Date("2017-12-05T04:26:07.584Z"), formatStr);
        }
    }
  }
</script>

## 工具库
常用的工具函数。

### 基本使用
在 `main.js` 中写入以下内容：

```html
import Vue from 'vue'
import fmutils from fm-vue-ui/lib/utils/index';
import App from './App.vue'

Vue.prototype.$utils = fmutils;

new Vue({
  el: '#app',
  render: h => h(App)
})
```

`fmutils` 目前提供的 API 列表如下:

```js
export default {
    formatDateToStr,  // 时间格式化
    avatarError,  // 设置默认头像
    // 下面三个是对 Storage 的封装, 均提供 set/get/remove/clear/getAll 五个 api
    localStorage,  // ==> window.localStorage
    sessionStorage, // ==> window.sessionStorage
    memoryStorage // ==> 存在内存中的一个 map 对象
};
```

### 默认头像
:::demo 用于头像加载失败时显示统一的默认头像。默认头像是 Base64 格式的。

```html
<img src="xxx.png" @error="avatarError"></img>

<script>
  export default {
    methods: {
        avatarError(flag) {
            return this.$utils.avatarError(e);
        }
    }
  };
</script>   
```
:::

### 时间格式化输出
:::demo 接受一个 Date 实例和格式输出。默认的输出格式是 `yyyy-MM-dd`。

```html
<p>默认的当前时间格式：<span v-text="getCurDate()"></span></p>
<p>默认输出的格式化时间：<span>{{formatDate()}}</span></p>
<p>指定格式输出：<span>{{formatDate('yyyy/MM/dd hh:mm:ss')}}</span></p>
<p>只输出时间：<span>{{formatDate('hh:mm:ss')}}</span></p>
<p>(只有一个 M/m/h/m/s等时)不加0：<span>{{formatDate('hh:mm:s')}}</span></p>

<script>
  export default {
    methods: {
        getCurDate() {
            return new Date("2017-12-05T04:26:44.584Z");
        },

        formatDate (formatStr = '') {
            return this.$utils.formatDateToStr(new Date("2017-12-05T04:26:44.584Z"), formatStr);
        }
    }
  };
</script>   
```
:::

### Storage 操作

`localStorage` 和 `sessionStorage` 仅是对 `window.localStorage` 和 `window.sessionStorage` 的一个封装：

```js
// 写入的 key 均会有私有前缀 _fm_
this.$utils.localStorage.set('name', 'test');  // 写
this.$utils.localStorage.get('name'); // 读 => 'test'
this.$utils.localStorage.set('name2', 'test2'); 
this.$utils.localStorage.getAll(); // 读取所有 => {name: 'test', name2: 'test2'}
this.$utils.localStorage.remove('name2'); // 清除指定的 key
this.$utils.localStorage.clear(); // 清除所有 key
```

**需要注意的是 `memoryStorage` 只是内存中的一个对象，可用于临时存储应用数据，但不可用于持久化数据。**
