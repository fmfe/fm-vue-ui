import Vue from 'vue';

import { createCompTest, destroyVM, createVM } from '../utils';
import Button from 'components/button';

describe('Button', () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });

    it('create', () => {
        vm = createCompTest(Button, {
            type: 'primary'
        });
        const buttonElm = vm.$el;
        expect(buttonElm.classList.contains('fm-btn-primary')).to.be.true;
    });

    it('disabled', () => {
        vm = createCompTest(Button, {
            disabled: true
        });
        const buttonElm = vm.$el;
        expect(buttonElm.classList.contains('fm-btn-disabled')).to.be.true;
    });

    it('size', () => {
        vm = createCompTest(Button, {
            size: 'large'
        });
        const buttonElm = vm.$el;
        expect(buttonElm.classList.contains('fm-btn-large')).to.be.true;
    });

    it('click/text', done => {
        let res = '';
        vm = createVM({
            template: `<fm-button @click="testClick">测试按钮</fm-button>`,
            methods: {
                testClick (e) {
                    res = '点击';
                }
            }
        });
        const buttonElm = vm.$el;
        buttonElm.click();
        expect(buttonElm.textContent).to.equal('测试按钮');
        setTimeout(() => {
            expect(res).to.equal('点击');
            done();
        }, 20);
    });
});
