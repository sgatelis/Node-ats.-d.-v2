import {createSlice} from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
    name: "review",
    initialState: {
        value: {
            reviews: []
        }
    },
    reducers: {
        createReview: ({value}, {payload}) => {
            value.reviews.push(payload)
        },
        updateReviews: ({value}, {payload}) => {
            value.reviews = payload
        }

    }
})


export const {createReview, updateReviews} = reviewsSlice.actions
export default reviewsSlice.reducer