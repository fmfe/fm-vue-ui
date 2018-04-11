<template>
    <div class="fm-radio-button-group">
        <a class="fm-radio-button" v-for="item in list" 
            :key="item.value" 
            :class="{'active': val === item.value }" 
            :style="{'min-width': buttonWidth ? buttonWidth + 'px' : ''}"
            @click="changeVal(item.value)">
            {{item.label}}
        </a>
    </div>
</template>
<script>
    export default {
        name: 'fm-radio-button-group',
        props: {
            dataSource: {
                type: Array,
                default: []
            },
            buttonWidth: {
                type: Number,
                default: 50
            },
            value: {}
        },
        data () {
            return {
                val: this.value
            };
        },
        computed: {
            list () {
                return this.dataSource.map(item => {
                    if (typeof item === 'object') return item;
                    return {
                        value: item,
                        label: item
                    };
                });
            }
        },
        methods: {
            changeVal (val) {
                this.val = val;
            }
        },
        watch: {
            val (val) {
                this.$emit('input', val);
                this.$emit('change', val);
            },
            value (val) {
                this.val = val;
            }
        }
    };
</script>   
