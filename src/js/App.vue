<template>
  <div id="app">
    <el-date-picker v-model="datetime" type="datetime" placeholder="日時を選択してください"></el-date-picker>
  </div>
</template>

<script>
  module.exports = {
    name: 'app',
    data () {
      return {datetime: ''}
    }
  }
</script>
