<template>
  <div class="hello">
  <h3>Post</h3>
  
  
  
        
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postId:''
  },
  data(){
  return{
    

  }
  },
  async created() {
   
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${1}`);

    let content = await response.json();
    console.log(content)
    this.posts = content
  

    
  },
  methods:{
   
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

</style>
