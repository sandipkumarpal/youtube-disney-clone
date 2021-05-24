import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recommend: null,
  newDisney: null,
  orginal: null,
  trending: null
}

export const movieSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const {
        payload: { recommend, newDisney, orginal, trending }
      } = action
      state = {
        ...state,
        recommend,
        newDisney,
        orginal,
        trending
      }
      return state
    }
  }
})

export const { setMovies } = movieSlice.actions

export default movieSlice.reducer
