<template>
  <div id="nav">
    <!-- Static Router Links -->
    <p v-if="user">{{user.first_name}}</p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/feeds">Feeds</router-link> |
    <!-- Dynamic Route Link -->
    <router-link :to="{ name: 'FeedItem', params: {feedId: 2140} }">Feed Item</router-link>
  </div>

  <!-- Router Outlet -->
  <router-view />

</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user    
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
