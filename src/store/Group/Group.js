import { Model } from 'vuex-orm';

import Item from '../Item/Item';

export default class Group extends Model {
  static entity = 'groups';

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(''),
      items: this.hasMany(Item, 'groupId'),
    };
  }
}
