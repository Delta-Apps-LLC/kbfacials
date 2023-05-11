import { SUPABASE } from "./db";

export const state = () => ({
    allReviews: []
})

export const mutations = {
    setReviews(state, data) {
        state.allReviews = data
    }
}

export const actions = {
    async postReview({ dispatch }, { numStars, title, text, name = 'Anonymous' }) {
        const { data, error, status } = await SUPABASE.from('reviews')
        .insert({
            numstars: numStars,
            title: title,
            text: text,
            author: name,
            date: new Date().toDateString()
        })

        if (!error) {
            await dispatch('getReviews')
        }
    },

    async getReviews({ commit }) {
        const { data, error, status } = await SUPABASE.from('reviews').select()
        if (!error) {
            await commit('setReviews', data)
        }
    },
}