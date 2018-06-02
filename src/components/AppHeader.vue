<template>
    <div class="ui secondary pointing menu">
      <router-link class="active item" :to="{name: 'gallery'}">
        Image Storage
      </router-link>
      
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link :to="{name: 'gallery'}" class="item">Galleries</router-link>
          <router-link :to="{name: 'upload'}" class="item">Upload</router-link>
          <a href="#" class="item" @click.prevent="logout">Logout</a>
        </div>
        <a v-else href="#" class="ui item" @click="login">
          login
        </a>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions(['login', 'logout']),
    onLogoClick() {
      console.log('logo click');
    }
  }
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
