<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">{{ logo }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <li class="nav-item" v-bind:class="{ active: homeActive }" @click="H()">
            <router-link a class="nav-link" to="/" >Home</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: aboutActive }" @click="A()">
            <router-link a class="nav-link" to="/about" >About</router-link>
          </li>
              <!-- <router-link to="/bar">Go to Bar</router-link> -->
      </div>
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
