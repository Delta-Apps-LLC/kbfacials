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
    async postReview({ dispatch }, { numStars, title, text, author = 'Anonymous' }) {
        const { data, error, status } = await SUPABASE.from('reviews')
        .insert({
            numstars: numStars,
            title: title,
            text: text,
            author: author,
            date: new Date().toDateString()
        })

        if (!error) {
            await dispatch('getReviews')
            return true
        } else return false
    },

    async getReviews({ commit }) {
        const { data, error, status } = await SUPABASE.from('reviews').select()
        if (!error) {
            await commit('setReviews', data)
        }
    },
}