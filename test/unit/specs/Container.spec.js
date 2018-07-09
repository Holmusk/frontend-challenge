import Vue from 'vue';

import Container from '@/components/Container/Container.vue';

const propsData = {};

describe('Container.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Container);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
