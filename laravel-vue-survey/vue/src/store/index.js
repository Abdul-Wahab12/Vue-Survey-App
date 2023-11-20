import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            data: { name: 'Abdul Wahab' },
            token: null
        }
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {}
});

export default store;