import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        members: [
            {id: 1, fname: 'Anthony' , lname: '' , name: 'Anthony', going: false},
            {id: 2, fname: 'Bryan' , lname: '' , name: 'Bryan 1', going: false},
            {id: 3, fname: 'l-j' , lname: '' , name: 'l-j', going: false},
            {id: 4, fname: 'Jigs' , lname: '' , name: 'Jigs', going: false},
            {id: 5, fname: 'Bryan' , lname: '' , name: 'Bryan 2', going: false},
            {id: 6, fname: 'Johannes' , lname: '' , name: 'Johannes', going: false},
            {id: 7, fname: 'Jonathan' , lname: '' , name: 'Kid', going: false},
            {id: 8, fname: 'Matt' , lname: '' , name: 'Matt', going: false},
            {id: 9, fname: 'Nerwin' , lname: '' , name: 'Nerwin', going: false},
            {id: 10, fname: 'Takahiro' , lname: '' , name: 'Takahiro', going: false},
            {id: 11, fname: 'Glenn' , lname: '' , name: 'Glenn', going: false},
            {id: 12, fname: 'Chinese' , lname: '' , name: 'Chinese', going: false},
            {id: 13, fname: 'Gene Ray' , lname: 'Medel' , name: 'Gene', going: false}
        ]
    },
    getters: {
        AllMember(state) {
            return state.members;
        },
        notGoing(state) {
            return state.members.filter( member => {
                return !member.going;
            });
        },
        confirmedGoing(state) {
            return state.members.filter( member => {
                return member.going;
             });
        },
        totalGoing(state) {
            const total = state.members.filter( member => {
               return member.going;
            });
            return total.length;
        }
    }
});