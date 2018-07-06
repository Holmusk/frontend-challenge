import { Model } from 'vuex-orm';

import Group from '../Group/Group';

export default class Item extends Model {
  static entity = 'items';

  static fields () {
    return {
      id: this.attr(null),
      groupId: this.belongsTo(Group),
      title: this.attr(''),
      checked: this.attr(false),
    };
  }
}
