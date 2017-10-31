<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <img class="navbar-brand" src="../assets/logo.png" alt="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" v-bind:class="{ active: homeActive }" @click="H()">
            <router-link class="nav-link" to="/" >Home</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: aboutActive }" @click="A()">
            <router-link class="nav-link" to="/about" >About</router-link>
          </li>
        </ul>  
    </div>
  </nav>
 </template>

<script>
export default {
  data() {
    return {
      logo: 'D-Group',
      homeActive: false,
      aboutActive: false
    }
  },

  methods: {
    H() {
      this.homeActive = true,
      this.aboutActive = false
    },
    A() {
      this.homeActive = false,
      this.aboutActive = true
    }
  }
}
</script>
