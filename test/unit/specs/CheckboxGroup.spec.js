import Vue from 'vue';

import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue';

const propsData = {
  group: {
    id: 1,
    title: 'Test checkbox group',
  },
};

describe('CheckboxGroup.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(CheckboxGroup);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
