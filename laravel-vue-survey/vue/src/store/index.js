import { createStore } from 'vuex';
import axiosClient from '../axios';

const tmpSurveys = [
    {
        id: 100,
        title: "The best frontend javascript framework is Vue.js",
        slug: "thebest-frontend-javascript-framework-isVuejs",
        status: "draft",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "My name is Wahab<br>I'm Web Developer with 2+ years of experience, free educational content available on my Vuejs channel",
        created_at: "2023-11-20 12:21:00",
        updated_at: "2023-11-20 12:21:00",
        expire_date: "2023-11-30 12:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Geogia" },
                        { uuid: "8d389891-2a53-4808-ba3a-dabebd0721a3", text: "Germany" },
                        { uuid: "c41f9cd6-8b64-11ee-b9d1-0242ac120002", text: "India" },
                        { uuid: "3df78224-40b8-4043-9bf2-761bdc8f4c66", text: "UK" },
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "Which language videos do you want to see on my channel?",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi harum optio!",
                data: {
                    options: [
                        { uuid: "be0aa45c-8b65-11ee-b9d1-0242ac120002", text: "Javascript" },
                        { uuid: "01bd8c73-83e1-4dc2-852d-c35e0310b747",  text: "PHP"},
                        { uuid: "109a8570-8b66-11ee-b9d1-0242ac120002", text: "HTML + CSS" },
                        { uuid: "7c79358d-2b6b-434a-9a49-5500a2430811", text: "All of the above" },
                        { uuid: "4b9d8168-8b66-11ee-b9d1-0242ac120002", text: "Everything Wahab thinks will be good" },
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "Which PHP framework do you want to see on my channel?",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi harum optio!",
                data: {
                    options: [
                        { uuid: "a85aba10-0a69-4536-940d-5c04e5718dfc", text: "Laravel" },
                        { uuid: "c0df2e54-8b66-11ee-b9d1-0242ac120002", text: "Yii2" },
                        { uuid: "5ebd1c92-865c-4fb3-a932-99c1052f4e64", text: "Symfony" },

                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi harum optio!",
                data: {
                    options: [
                        { uuid: "35408784-8b67-11ee-b9d1-0242ac120002", text: "Laravel 5" },
                        { uuid: "3e1b30d4-8b67-11ee-b9d1-0242ac120002", text: "Laravel 6" },
                        { uuid: "45409caa-fc6d-42b8-b0f1-694885fa3b3c", text: "Laravel 7" },
                        { uuid: "72b3671c-8b67-11ee-b9d1-0242ac120002", text: "Laravel 8"},
                    ]
                }
            },
            {
                id: 5,
                type: "checkbox",
                question: "What type of projects do you want to see on my channel built with Laravel?",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi harum optio!",
                data: {
                    options: [
                        { uuid: "d4c15b94-8b67-11ee-b9d1-0242ac120002", text: "REST API" },
                        { uuid: "da22dc4f-9e42-4627-8fd1-cebd428b9ae3", text: "E-commerce" },
                        { uuid: "041d5028-8b68-11ee-b9d1-0242ac120002", text: "Real Estate" },
                        { uuid: "c49e2caf-7dc2-42e9-83d8-3d9f6f43f871", text: "All of the above" }
                    ]
                }
            },
            {
                id: 6,
                type: "text",
                question: "What's your favorite Youtube channel?",
                description: null,
                data: {},
            },
            {
                id: 7,
                type: "textarea",
                question: "What do you think about Vue Mastery channel?",
                description: "Write your honest opinion. Everything is anonymous."
            }
        ],
    },
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: 
        "https://fastly.picsum.photos/id/1077/536/354.jpg?hmac=H9e8TEePUK_x6LrYCZX8_tfKy72ThgK32zNPAU20Qfw",
        description: "Laravel is a web application framework with expressive, elegant syntax.",
        created_at: "2023-11-25 18:00:00",
        updated_at: "2023-11-25 18:00:00",
        expire_at: "2023-12-31 18:00:00",
        questions: [],
    },
    {
        id: 300,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: 
        "https://media.istockphoto.com/id/1195605168/photo/java-code-of-web-page-vue-routes-java-routes-vue-js-routes-java-script-programming-concept.jpg?s=2048x2048&w=is&k=20&c=u3pvMRjJD-l3PEL4uXTWp8hKUujwz273RaGm4f09gns=",
        description: "Vue is a progressive framework for building user interfaces via component",
        created_at: "2023-12-25 17:00:00",
        updated_at: "2023-12-25 17:00:00",
        expire_at: "2023-12-31 17:00:00",
        questions: [],
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: 
        "https://media.istockphoto.com/id/1250984508/photo/css-stylesheet-on-a-screen-programming-concept.jpg?s=2048x2048&w=is&k=20&c=Ivhl0otIJ0Wk9L5GNWavtEpTQGbsrLYCKEjTzd_bd4Q=",
        description: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap.",
        created_at: "2023-12-25 14:00:00",
        updated_at: "2023-12-25 14:00:00",
        expire_at: "2023-12-31 14:00:00",
        questions: [],
    }
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys]
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    actions: {
        register({commit}, user) {
            return axiosClient.post('/register', user)
            .then(({ data }) => {
                commit('setUser', data)
                return data
            })
        },

        login({commit}, user) {
            return axiosClient.post('/login', user)
            .then(({ data }) => {
                commit('setUser', data)
                return data;
            })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
            .then((response) => {
                commit('logout')
                return response;
            })
        }
    },
    getters: {},
    modules: {}
});

export default store;