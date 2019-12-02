import axios from  'axios'
let config = {
    headers: {
        'Access-Control-Allow-Origin': '*' ,
    },
    crossDomain:true,
    withCredentials: true,
    credentials: 'same-origin',
};
const state = {
    corporation:[],
    news:[],
    videos:[],
    galleries:[],
    abouts:[],
    aoc:[],
};
const getters = {
    all_aoc:function (state) {
        return state.aoc
    },
    all_abouts:function (state) {
        return state.abouts
    },
    all_corporation:function (state) {
        return state.corporation
    },
    all_news:function (state) {
        return state.news
    },
    all_videos:function (state) {
        return state.videos
    },
    all_galleries:function (state) {
        return state.galleries
    }
};
const actions = {
    async fetchAoc({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-aoc');
            commit('SET_AOC',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchAbout({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-about');
            commit('SET_ABOUT',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchGalleries({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-gallery');
            commit('SET_GALLERY',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchCorporation({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-corporation');
            commit('SET_CORPORATION',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchNews({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-news');
            commit('SET_NEWS',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchVideos({commit}){
        try {
            const res = await fetch('https://mcu.backend.siqware.app/api/get-videos');
            commit('SET_VIDEO',res.data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_AOC:function (state,data) {
        state.aoc = data
    },
    SET_ABOUT:function (state,data) {
        state.abouts = data
    },
    SET_CORPORATION:function (state,data) {
        state.corporation = data
    },
    SET_NEWS:function (state,data) {
        state.news = data
    },
    SET_VIDEO:function (state,data) {
        state.videos = data
    },
    SET_GALLERY:function (state,data) {
        state.galleries = data
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
}