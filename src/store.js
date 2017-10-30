import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        members: [
            {id: 1, name: 'Anthony', going: false},
            {id: 2, name: 'Bryan 1', going: false},
            {id: 3, name: 'l-j', going: false},
            {id: 4, name: 'Jigs', going: false},
            {id: 5, name: 'Bryan 2', going: false},
            {id: 6, name: 'Johannes', going: false},
            {id: 7, name: 'Kid', going: false},
            {id: 8, name: 'Matt', going: false},
            {id: 9, name: 'Nerwin', going: false},
            {id: 10, name: 'Takahiro', going: false},
            {id: 11, name: 'Glenn', going: false},
            {id: 12, name: 'Chinese', going: false},
            {id: 13, name: 'Gene', going: false}
        ]
    },
    getters: {
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