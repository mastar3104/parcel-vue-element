<template>
  <div id="app">
    <a href="#" v-on:click="log">クリック</a>
  </div>
</template>

<script lang="ts">
  module.exports = {
    name: 'app',
    methods : {
      getMsg() : string {
        return 'msg';
      },
      log() : void {
        let msg = this.getMsg();
        console.log(msg);
      }
    }
  }
</script>
