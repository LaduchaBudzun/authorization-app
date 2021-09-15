<template>
  <div class="hello">
  
    <h1>{{ msg }}</h1>
        <form class="form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-modal="email">
           {{ email }}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control"  v-modal="password">
        </div>
      
        <div class="d-auth">
          <button type="button" class="btn btn-auth">Login</button>
        </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Authorization',
  props: {
  msg: String,
  // email:String,
  // password:String,
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  max-width: 500px;
  margin: 0 auto;
}
.form{

  
}
.d-auth{
  display: flex;
  justify-content: center;
}
.btn-auth{
  padding: 10px 60px;
  background-color: rgb(199, 0, 0);
  color: white;
  font-size: 18px;
}
</style>
