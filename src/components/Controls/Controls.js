import Vue from 'vue';

import '@/components/ManageStateForm/ManageStateForm.vue';
import '@/components/CreateGroupForm/CreateGroupForm.vue';
import '@/components/CreateItemForm/CreateItemForm.vue';

Vue.component('Controls', {
  template: `
    <div>
      <ManageStateForm />
      <CreateGroupForm />
      <CreateItemForm />
    </div>
  `,
});

export default {};
