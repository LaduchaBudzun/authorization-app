<template>
  <div class="bg">
    <div class="container" >
    <router-view/>
    


    </div>
  </div>
</template>

<script>
// import Authorization from './pages/Authorization.vue'
// import Posts from './pages/Posts.vue'

export default {
  name: 'App',
  components: {
  // Authorization,
  // Posts
  },


}
</script>

<style>
.bg{
  position: absolute;
   /* background: #648880;
  background: linear-gradient(to right, #f6f1d3, #648880, #293f50); */
  background: #c7b39b url(assets/stripes-light.png);
  min-height: 100%;
  top: 0;
  left: 0;
  right: 0;
}
.container{
  margin-top: 60px;
}
.logo{
  margin: 0 auto;
  width: 200px;
}
</style>
