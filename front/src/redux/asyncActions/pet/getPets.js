import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getPets = createAsyncThunk(
    'pets/getAll/',
    async (browser = {}) => {
        try {
            return await axios.get(
                `${API_ROUTE}/pets/getAll/${browser.type}?species=${browser.filter.species}&gender=${browser.filter.gender}&city=${browser.filter.city}&date=${browser.filter.date}&name=${browser.filter.name}&color=${browser.filter.color}&size=${browser.filter.size}`
            )
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetPets = {
    [getPets.pending]: (state) => {
        state.status = 'loading'
    },
    [getPets.fulfilled]: (state, action) => {
        state.statusPets = 'success'
        if (action.payload.data.type === 'Lost') {
            state.LostPetsData = action.payload.data
        } else {
            state.FoundPetsData = action.payload.data
        }
    },
    [getPets.rejected]: (state) => {
        state.status = 'failed'
    },
}
