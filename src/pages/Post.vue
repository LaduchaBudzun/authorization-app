<template>
  <div class="hello">
  <h3>Post</h3>

<div class="post">
  <h3 class="title">{{post.title}}</h3>
  <h6 class="text">{{post.body}}</h6>
  

</div>
  <div class="comments">
    <h4>Comments</h4>
    <div class="comment" v-for="comment in comments" :key="comment.id">

      <div class="ava" v-for="user in users" :key="user.id">
        

        <div class="email" v-if="comment.id == user.id">
          <img src="https://cdn141.picsart.com/326383677140211.png?type=webp&to=min&r=640" alt="">
          {{user.name}}, {{user.company.name}}</div>
        </div>
        <!-- <div class="email" >
          <img src="https://cdn141.picsart.com/326383677140211.png?type=webp&to=min&r=640" alt="">
          {{comment.email}}</div>
        </div> -->


      <div class="name">{{comment.name}}</div>
      <div class="body">{{comment.body}}</div>
    </div>
  </div>
  
        
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
  },
  data(){
  return{
    post:{},
    comments:[],
    users:[]

  }
  },
  methods:{
   getComments(){
     
   }
  },
  async created() {
// ------информация поста
    let responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    let contentPosts = await responsePosts.json();
   
    contentPosts.forEach(post =>{

      if (post.id == this.$route.params.Id){
        this.post = post
      }
    })

// -----комментарии к посту
    let responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.$route.params.Id}`);
    let contentComments = await responseComments.json();
    this.comments = contentComments
    console.log(contentComments)
  

// -----Имя и компания 
    let responseCommentators = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let contentCommentators = await responseCommentators.json();
    this.users = contentCommentators
    console.log(contentCommentators)
  },
  
  
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
.post{
  color: aliceblue;
  padding: 15px;
  background-color: rgb(51, 48, 48);
  border-radius: 20px;
}
.title{

}
.comments{
  margin-top: 30px;
  color: aliceblue;
  padding: 15px;
  background-color: rgb(51, 48, 48);
  border-radius: 20px;
}
.comment{
  margin-bottom: 30px;
}
.ava{
  display: flex;
  align-items: center;
}
.ava img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.email{
  font-weight: 700;
  font-size: 18px;
}
.name{
  font-weight: 500;
  font-size: 17px;

}
.body{
  margin-top: 10px;
  font-size: 14px;
}


</style>
