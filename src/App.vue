<template>
    <div id="app">
      <NavApp></NavApp>
        <router-view></router-view>
      <FooterApp></FooterApp>
    </div>
</template>

<script>
    import NavApp from './components/NavApp.vue';
    import FooterApp from './components/FooterApp.vue';

export default {
        components: {
            NavApp, FooterApp
        }
  }
</script>

