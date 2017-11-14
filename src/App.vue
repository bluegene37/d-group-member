<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Panel from './components/panel/Panel.vue'
    import Auth from './components/auth/Auth.vue'

export default {
        components: {
            Panel, Auth
        },
  }
</script>

