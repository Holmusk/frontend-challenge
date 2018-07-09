import Vue from 'vue';

import App from '@/components/App/App.vue';

const propsData = {};

describe('App.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
