<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'AuthHandler',
  methods: {
    ...mapActions(['finalizeLogin']),
  },
  created() {
    this.finalizeLogin(this.$route.hash);
  }
}
</script>

<style>
</style>
