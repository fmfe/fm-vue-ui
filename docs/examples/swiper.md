<script>
    export default {
        data() {
            return {
                list: [
                    {
                        image: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dc8l3pqj30dw09aq4g.jpg',
                        url: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dc8l3pqj30dw09aq4g.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dca7vthj30dw09a0tw.jpg',
                        url: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dca7vthj30dw09a0tw.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dcac9a5j30dw09adhc.jpg',
                        url: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dcac9a5j30dw09adhc.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dca63euj30dw09a76n.jpg',
                        url: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dca63euj30dw09a76n.jpg',
                        title: '家有萌宠'
                    }
                ]
            }
        }
    }
</script>

## 简易轮播

超简洁图片轮播组件

### 基本用法

不传任何参数，则默认显示。点击图片下面的点，可以进行图片切换。

:::demo

```html
<fm-swiper></fm-swiper>
```
:::

### 自定义

传入`list`参数，改变图片链接及title。传入`delay`参数，改变默认轮播切换时间。

:::demo

```html
<fm-swiper :list="list" :delay="5000"></fm-swiper>

<script>
  export default {
    data() {
      return {
        list: [
          {
            image: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dc8l3pqj30dw09aq4g.jpg',
            url: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dc8l3pqj30dw09aq4g.jpg',
            title: '家有萌宠'
          },
          {
            image: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dca7vthj30dw09a0tw.jpg',
            url: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dca7vthj30dw09a0tw.jpg',
            title: '家有萌宠'
          },
          {
            image: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dcac9a5j30dw09adhc.jpg',
            url: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fm9dcac9a5j30dw09adhc.jpg',
            title: '家有萌宠'
          },
          {
              image: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dca63euj30dw09a76n.jpg',
              url: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dca63euj30dw09a76n.jpg',
              title: '家有萌宠'
          }
        ]
      }  
    }
  };
</script>
```
:::

### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :-------------- | :-------------- | :---------- | :---------------------------  | :-------- |
| delay | 轮播切换时间 | number | - | 3000 |
| list | 轮播图片信息，默认值为，image地址，url地址，title名组成的数组对象 |  array | - | [{image: '', url: '', title: ''}] |
