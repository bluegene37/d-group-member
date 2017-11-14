<template>
<div>
    <header class=" navMargin">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">
        <img src="/src/assets/img/v-logo.png" height="35" alt="">
    </a>
    <a class="btn btn-default" href="#menu-toggle" id="menu-toggle" role="button">
        <a><i class="fa fa-navicon fa-lg"></i></a>
    </a>
    
    <div class="ml-auto">
        <ul class="navbar-nav ">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="/src/assets/img/profile.png" class="rounded-circle img-thumbnail inset" alt="image"> 
            Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">   
              <router-link class="dropdown-item" to="/panel/profile"><i class="fa fa-user fa-fw" aria-hidden="true"></i> Profile</router-link>
              <router-link class="dropdown-item" to="/panel/profile/sessions"><i class="fa fa-tasks fa-fw" aria-hidden="true"></i> Active Sessions</router-link>
              <router-link class="dropdown-item" to="/login"><i class="fa fa-sign-out fa-fw" aria-hidden="true"></i> Logout</router-link>
            </div>
        </li>
        </ul>
    </div>
    </nav>
    </header>
   
    <!-- Sidebar -->
   <div class="container-fluid" id="wrapper">
      <div class="row">
        <nav class="d-sm-block bg-light sidebar" id="sidebar-wrapper">
          <img src="/src/assets/img/profile.png" class="rounded-circle img-thumbnail mx-auto" alt="image">   
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <router-link class="nav-link" to="/panel/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/panel/user">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/panel/activity">Activity Log</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapse1">Roles & Permission  <i class="fa fa-angle-down fa-fw" aria-hidden="true"></i></a>
            </li>
                <div class="collapse" id="collapse1">
                    <li class="nav-item">
                    <router-link class="nav-link" to="/panel/roles">&nbsp; Roles</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/panel/permissions">&nbsp; Permissions</router-link>                      
                    </li>
                </div>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapse2">Settings <i class="fa fa-angle-down fa-fw" aria-hidden="true"></i></a>
            </li>
                <div class="collapse" id="collapse2">
                    <li class="nav-item">
                    <router-link class="nav-link" to="/panel/general">&nbsp; General</router-link> 
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/panel/registration">&nbsp; Auth & Registration</router-link> 
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/panel/notifications">&nbsp; Notifications</router-link> 
                    </li>
                </div>
          </ul>      
        </nav>
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <router-view></router-view>            
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import Dashboard from './dashboard/Dashboard.vue'
  import Users from './user/Users.vue'
  import ActivityLog from './log/Activity-Log.vue'
  import Permissions from './roles-permissions/Permissions.vue'
  import Roles from './roles-permissions/Roles.vue'
  import General from './settings/General.vue'
  import Registrations from './settings/Auth-Registration.vue'
  import Notifications from './settings/Notifications.vue'
  import Profile from './profile/Profile.vue'
  import ActiveSessions from './profile/ActiveSessions.vue'
export default {
          components: {
            Dashboard, 
            Users, 
            ActivityLog,
            Permissions,
            Roles,
            General,
            Registrations,
            Notifications,
            Profile,
            ActiveSessions
        },
    mounted(){
      // router.beforeEach((to, from, next) => {
      //   document.title = to.meta.title
      //   next()
      // })
  }
}
</script>

<style scopedSlots>
      .inset {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow:
    inset 0 0 0 2px rgba(255,255,255,0.6), 
    0 1px 1px rgba(0,0,0,0.1);
  background-color: transparent !important;
  z-index: 999;
}

.inset img {
  border-radius: inherit;
  width: inherit;
  height: inherit;
  display: block;
  position: relative;
  z-index: 998;
}

.vl {
  border-right: 1px solid gray;
}
.navMargin {
    margin:72px;
}

/* sidemenu */
/* 
body {
  overflow-x: hidden;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
} */

</style>
