import Vue from 'vue';

import ManageStateForm from '@/components/ManageStateForm/ManageStateForm.vue';

const propsData = {};

describe('ManageStateForm.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(ManageStateForm);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el).toMatchSnapshot();
  });
});
