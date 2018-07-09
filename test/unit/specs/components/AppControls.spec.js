import Vue from 'vue';

import AppControls from '@/components/AppControls/AppControls.vue';

const propsData = {};

describe('AppControls.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(AppControls);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
