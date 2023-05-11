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
    async postReview({ commit }, { numStars, title, text, name = 'Anonymous' }) {
        const { data, error, status } = await SUPABASE.from('reviews')
        .insert({
            numstars: numStars,
            title: title,
            text: text,
            author: name,
            date: new Date().toDateString()
        }).select()

        if (!error) {
            await commit('setReviews', data)
        }
    },

    async getReviews({ commit }) {
        const { data, error, status } = await SUPABASE.from('reviews').select()
        if (!error) {
            await commit('setReviews', data)
        }
    },
}