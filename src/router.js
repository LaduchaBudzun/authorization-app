import VueRouter from "vue-router";
import Authorization from "./pages/Authorization.vue";
import Posts from "./pages/Posts.vue";
import Post from "./pages/Post.vue";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Authorization,
    },
    {
      path: "/posts",
      component: Posts,
    },
    {
      path: "/post",
      component: Post,
    },
  ],
  mode: "history", // отключение '#'
});
