import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import Panel from '../components/panel/Panel.vue'
import Dashboard from '../components/panel/dashboard/Dashboard.vue'
import Users from '../components/panel/user/Users.vue'
import ActivityLog from '../components/panel/log/Activity-Log.vue'
import Permissions from '../components/panel/roles-permissions/Permissions.vue'
import Roles from '../components/panel/roles-permissions/Roles.vue'
import General from '../components/panel/settings/General.vue'
import Registrations from '../components/panel/settings/Auth-Registration.vue'
import Notifications from '../components/panel/settings/Notifications.vue'
import Profile from '../components/panel/profile/Profile.vue'
import ActiveSessions from '../components/panel/profile/ActiveSessions.vue'
import Auth from '../components/auth/Auth.vue'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/panel', name: Panel, component: Panel, children: [  
                {
                  path: 'dashboard',
                  component: Dashboard
                },
                {
                  path: 'user',
                  component: Users
                },
                {
                  path: 'activity',
                  component: ActivityLog
                },
                {
                  path: 'roles',
                  component: Roles
                },
                {
                  path: 'permissions',
                  component: Permissions
                },
                {
                  path: 'general',
                  component: General
                },
                {
                  path: 'registration',
                  component: Registrations
                },
                {
                  path: 'notifications',
                  component: Notifications
                },
                {
                  path: 'profile',
                  component: Profile
                },
                {
                  path: 'profile/sessions',
                  component: ActiveSessions
                }
              ]
            },
      {path: '/login', name: 'Auth', component: Auth}
    ]
  })
