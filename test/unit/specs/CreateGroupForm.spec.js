import Vue from 'vue';

import CreateGroupForm from '@/components/CreateGroupForm/CreateGroupForm.vue';

const propsData = {};

describe('CreateGroupForm.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(CreateGroupForm);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
