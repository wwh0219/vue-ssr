<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  async created(){
    console.log(this)
  }
}
</script>