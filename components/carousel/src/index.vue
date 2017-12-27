<template>
    <div class="fm-swiper-wrapper">
        <ul>
            <li v-for="(item, index) in list" :key="index" v-show="index === slideIndex" class="fm-swiper-imgs">
                <a :href="item.url" target="_blank">
                    <img :src="item.image" :alt="item.title" width="100%">
                </a>
            </li>
            <ul class="fm-swiper-dot">
                <li v-for="(item, index) in list" :key="index"  :class="{ actived: index === slideIndex}" @click="clickDot(index)"></li>
            </ul>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'fm-carousel',
    props: {
        list: {
            type: Array,
            required: true
        },

        delay: {
            type: Number,
            default: 1500
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
