import { Model } from 'vuex-orm';

export default class Item extends Model {
  static entity = 'items';

  static fields () {
    return {
      id: this.attr(null),
      // @todo Using belongsTo causes groupId to be set to null when getting
      // item object from state. I'll use default attr for now.
      groupId: this.attr(null),
      title: this.attr(''),
      checked: this.attr(false),
    };
  }
}
