<template>
    <div class="fm-swiper-wrapper">
        <ul>
            <li v-for="item, index in list" v-show="index === slideIndex" class="fm-swiper-imgs">
                <a :href="item.url" target="_blank">
                    <img :src="item.image" :alt="item.title" width="100%">
                </a>
            </li>
            <ul class="fm-swiper-dot">
                <li v-for="item, index in list" :class="{actived: index === slideIndex}" @click="clickDot(index)">
                </li>
            </ul>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'fm-swiper',
    props: {
        list: {
            type: Array,
            default () {
                return [
                    {
                        image: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dc8l608j30dw09aq4d.jpg',
                        url: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fm9dc8l608j30dw09aq4d.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dc8l3zhj30dw09aabq.jpg',
                        url: 'http://ww4.sinaimg.cn/large/0060lm7Tly1fm9dc8l3zhj30dw09aabq.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fm9dc9mp1nj30dw09aab9.jpg',
                        url: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fm9dc9mp1nj30dw09aab9.jpg',
                        title: '家有萌宠'
                    },
                    {
                        image: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fm9dc8llv9j30dw09a780.jpg',
                        url: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fm9dc8llv9j30dw09a780.jpg',
                        title: '家有萌宠'
                    },
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
                ];
            } 
        },
        delay: {
            type: Number,
            default: 3000
        }
    },
    data () {
        return {
            slideIndex: 0,
            timer: null
        };
    },
    methods: {
        slide () {
            if (this.slideIndex >= (this.list.length - 1)) {
                this.slideIndex = 0;
            } else {
                this.slideIndex++;
            }
        },
        clickDot (index) {
            clearInterval(this.timer);
            this.slideIndex = index;
            this.timer = setInterval(() => {
                this.slide();
            }, this.delay);
        }
    },
    mounted () {
        this.timer = setInterval(() => {
            this.slide();
        }, this.delay);
    }
};
</script>
