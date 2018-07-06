import { Model } from 'vuex-orm';

export default class Group extends Model {
  static entity = 'groups';

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(''),
    };
  }
}
