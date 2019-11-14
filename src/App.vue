<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  async created(){
    import('lodash').then((res)=>{
      res.default
    })
  }
}
</script>