import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        members: [
            {id: 1, fname: 'Anthony' , lname: '' , name: 'Anthony', going: false},
            {id: 2, fname: 'Bryan' , lname: '' , name: 'Bryan 1', going: false},
            {id: 3, fname: 'l-j' , lname: '' , name: 'l-j', going: false},
            {id: 4, fname: 'Jigs' , lname: '' , name: 'Jigs', going: false},
            {id: 5, fname: 'Bryan' , lname: '' , name: 'Bryan 2', going: false}
        ],
        roladeskAPIadd: {link: 'http://server.roladesk.teamorange.tech/api/login'},
        qoutesAPIadd: {link: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'},
        html5VuexStorage: {token: '' }
    },
    getters: {
        AllMember(state) {
            return state.members;
        },
        MembersCount(state) {
           return state.members.length;
            },
        roladeskAPIget(state) {
            return state.roladeskAPIadd.link;
        },
        qoutesAPIget(state) {
            return state.qoutesAPIadd.link;
        }
    }
})