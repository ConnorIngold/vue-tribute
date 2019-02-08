import Tribute from 'tributejs';

var VueTribute = {
  name: "vue-tribute",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  mounted: function mounted() {
    if (typeof Tribute === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs!");
    }

    var $el = this.$slots.default[0].elm;
    this.tribute = new Tribute(this.options);
    this.tribute.attach($el);
  },
  beforeDestroy: function beforeDestroy() {
    var $el = this.$slots.default[0].elm;

    if (this.tribute) {
      this.tribute.detach($el);
    }
  },
  render: function render(h) {
    return h("div", {
      staticClass: "v-tribute"
    }, this.$slots.default);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

export default VueTribute;
