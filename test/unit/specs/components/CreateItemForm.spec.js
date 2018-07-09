import Vue from 'vue';

import CreateItemForm from '@/components/CreateItemForm/CreateItemForm.vue';

const propsData = {};

describe('CreateItemForm.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(CreateItemForm);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
