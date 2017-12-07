
<script>
  export default {
    data() {
      return {
        value: null,
        value1: 3,
        value2: 4
      }  
    },
    methods: {
      getScore(data) {
        alert(`您得到 ${data * 2} 分啦！ლ(′◉❥◉｀ლ)`);
      }
    }
  };
</script>  

## Rate 评分

常用评分组件

### 基本用法

可点击，进行选择评分。通过传入`colors`可改变选择不同分值时的颜色效果，不传入，则默认不改颜色。

:::demo 

```html
<fm-rate v-model="value" @change="getScore"></fm-rate>
<fm-rate v-model="value" @change="getScore" :colors='["#99A9BF", "#F7BA2A", "#FF9900"]'></fm-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }  
    },
    methods: {
      getScore(data) {
        alert(`您得到 ${data * 2} 分啦！ლ(′◉❥◉｀ლ)`);
      }
    }
  };
</script>  
```
:::

### 显示分值

可选择显示评分。通过传入`score-text`可改变选择不同类型分值，不传入，则默认为`2, 4, 6, 8, 10`。

:::demo 

```html
<fm-rate v-model="value" @change="getScore" show-text></fm-rate>
<fm-rate v-model="value" @change="getScore" :score-text='["极差", "一般", "不错", "很好", "惊喜"]' show-text></fm-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }  
    },
    methods: {
      getScore(data) {
        alert(`您得到 ${data * 2} 分啦！ლ(′◉❥◉｀ლ)`);
      }
    }
  };
</script>  
```
:::

### 只读

显示评分，不可点击，可选择是否显示分值。

:::demo `disabled`设置不可点击，`show-text`设置显示分值。

```html
<fm-rate v-model="value1" disabled></fm-rate>
<fm-rate v-model="value2" show-text disabled></fm-rate>

<script>
  export default {
    data() {
      return {
        value1: 3,
        value2: 4
      }  
    }
  };
</script>  
```
:::  

### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :-------------- | :-------------- | :---------- | :---------------------------  | :-------- |
| max | 最大分值 | number | - | 5 |
| show-text | 是否显示分值 |  boolean | - | false |
| score-text | 分值显示类型数组 |  array | - | ['2 分', '4 分', '6 分', '8 分', '10 分'] |
| text-color | 分值文字颜色 |  string | - | '#ffbe58' |
| colors | icon颜色数组，共有 3 个元素，为 3 个分段所对应的颜色  |  array | - | ['ffbe58', 'ffbe58', 'ffbe58'] |
| disabled | 是否为只读 |  boolean | - | false |
