<template>
    <div class="rate">
        <span class="item" v-for="item in max" @mousemove="setValue(item)" @mouseleave="removeValue" @click="setValue(item, true)" :style="{ cursor: disabled ? 'auto' : 'pointer'}">
            <i class="iconfont" :class="(curValue >= item) ? 'icon-star-on' : 'icon-star-off'" :style="{ color: changeColor() }"></i>    
        </span>
        <span class="score" v-if="showText" :style="{ color: curTextColor }">{{score}}</span> 
    </div>
</template>
<script>
export default {
    name: 'fm-rate',
    data () {
        return {
            isClick: false,
            store: null,
            curTextColor: '#ffbe58',
            curValue: this.value
        };
    },
    props: {
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 5
        },
        showText: {
            type: Boolean,
            dafault: false
        },
        scoreText: {
            type: Array,
            default () {
                return ['2 分', '4 分', '6 分', '8 分', '10 分'];
            }
        },
        textColor: {
            type: String,
            default: '#ffbe58'
        },
        colors: {
            type: Array,
            default () {
                return ['ffbe58', 'ffbe58', 'ffbe58'];
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        score () {
            let score = '';
            score = this.scoreText[this.curValue - 1];
            this.curTextColor = this.changeColor();
            return score;
        }
    },
    methods: {
        changeColor () {
            let c = '';
            if (this.curValue < 3) {
                c = this.colors[0];
            } else if (this.curValue === 3) {
                c = this.colors[1];
            } else {
                c = this.colors[2];
            }
            return c;
        },
        setValue (index, click = false) {
            if (this.disabled) return;
            this.curValue = index;
            if (click) {
                this.store = index;
                this.isClick = true;
                this.$emit('change', index);
            }
        },
        removeValue () {
            if (this.disabled) return;
            this.curValue = !this.isClick ? 0 : this.store;
        }
    }
};
</script>
