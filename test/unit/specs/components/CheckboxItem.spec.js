import Vue from 'vue';

import CheckboxItem from '@/components/CheckboxItem/CheckboxItem.vue';

const propsData = {
  item: {
    id: 1,
    title: 'Test checkbox item',
    checked: true,
    groupId: 1,
  },

  disabled: true,
};

describe('CheckboxItem.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(CheckboxItem);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
