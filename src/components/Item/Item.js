import Vue from 'vue';

Vue.component('Item', {
  props: [
    'item',
  ],

  template: `
    <div>
      <input type="checkbox" name="item-{{item.id}}" id="item-{{item.id}}" v-model="item.checked" />
      <label for="item-{{item.id}}">{{item.title}}</label>
    </div>
  `,
});
