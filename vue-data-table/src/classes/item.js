import { Model } from "@vuex-orm/core";

export default class item extends Model {
  static entity = "item";

  static fields() {
    return {
      id: this.attr(null),
      massname: this.attr(null),
      year: this.attr(null),
      wo: this.attr(null),
      locx: this.attr(null),
      locy: this.attr(null),
    };
  }
}
