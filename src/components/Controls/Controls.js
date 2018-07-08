import Vue from 'vue';

import '../ManageStateForm/ManageStateForm.vue';
import '../CreateGroupForm/CreateGroupForm.vue';
import '../CreateItemForm/CreateItemForm.vue';

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
