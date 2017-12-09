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

## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

适用广泛的基础用法。

:::demo Click 指示器触发

```html
<fm-carousel :list="list"></fm-carousel>
```
:::

### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :-------------- | :-------------- | :---------- | :---------------------------  | :-------- |
| delay | 轮播切换时间 | number | - | 3000 |
| list | 轮播图片信息，默认值为，image地址，url地址，title名组成的数组对象 |  array | - | [{image: '', url: '', title: ''}] |
