<template>
  <div class="hello">
    <router-link to="/">Перейти к Login</router-link>
  <h3>Posts</h3>

  <div class="container-posts">
    <div class="post" v-for="post in posts" :key="post.id" >
      <div class="title">{{post.title}}</div>
      <div class="text">{{post.body}}</div>
      <div class="d-auth">
         <button type="button" class="btn btn-all" @click="postAll(post.id)">Подробнее</button>
        </div>

    </div>
    
  </div>
  
        
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
  },
  data(){
  return{
    posts:[],

  }
  },
  async created() {
   
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let content = await response.json();
    this.posts = content
    console.log(content)

    
  },
  methods:{
   postAll(idPost){
     this.$router.push(`/post/${idPost}`)
   }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  max-width: 500px;
  margin: 0 auto;
}
.hello h3{
  margin: 20px;
  text-align: center;
}
.container-posts{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
}

.post{

 max-width: 220px;

  position: relative;
  padding: 10px;
  background-color: rgb(51, 48, 48);
  color: aliceblue;
  border-radius: 5px;
  transition: all 0.3s;
}
.post:hover{

-webkit-box-shadow: 7px 7px 30px 6px rgba(0, 0, 0, 0.2);
-moz-box-shadow: 7px 7px 30px 6px rgba(0, 0, 0, 0.2);
box-shadow: 7px 7px 30px 6px rgba(0, 0, 0, 0.2);
}
.title{

  white-space: nowrap; /* Отменяем перенос текста */
    overflow: hidden;
    text-overflow: ellipsis;
  font-size: 19px;
}
.text{
font-size: 14px;
margin-bottom: 35px;
overflow: hidden;

max-height: 40px;
}
.btn-all{

  position: absolute;
  padding: 4px 2px;
  background-color: rgb(199, 0, 0);
  color: white;
  font-size: 12px;
  bottom: 8px;
  transition: all 0.2s;
}
.btn-all:hover{
-webkit-box-shadow: 1px 1px 12px 0px rgba(255, 255, 255, 0.2);
-moz-box-shadow: 1px 1px 12px 0px rgba(255, 255, 255, 0.2);
box-shadow: 1px 1px 12px 0px rgba(255, 255, 255, 0.2);

}
@media screen and (max-width: 700px) {
  .container-posts{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 10px;
}
.post{
  margin: 0 auto;
}
}
</style>
