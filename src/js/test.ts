import Vue from 'vue/dist/vue.esm.js'

let vue = new Vue({
  data : {
    active: false
  },
  methods : {
    toggleActive() : void {
      this.active = !(this.active);
    },
    getMsg() : string {
      return 'msg';
    },
    log() : void {
      let msg = this.getMsg();
      console.log(msg);
    }
  }
}).$mount('#app')
