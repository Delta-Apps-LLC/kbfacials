import { SUPABASE } from "./db";

export const state = () => ({
    reviews: getReviews()
})

export const mutations = {
    setReviews(state, data) {
        state.reviews = data
    }
}

export const actions = {
    async postReview({ commit, dispatch }, { numStars, text, name = 'Anonymous' }) {
        const { data, error, status } = await SUPABASE.from('reviews')
            .insert({
                // fields
            }).select()
    },

    async getReviews({ commit }) {
        const { data, error, status } = await SUPABASE.from('reviews').select()
        if (error == null || error == undefined) {
            await commit('setReviews', data)
        }
    },
}