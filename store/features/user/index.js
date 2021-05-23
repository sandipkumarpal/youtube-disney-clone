import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSignIn: (state, action) => {
      const { payload } = action
      const { displayName, email, photoURL } = payload
      const userData = {
        name: displayName,
        email,
        pic: photoURL
      }
      state = { ...userData }
      return state
    },
    setUserSignOut: state => {
      state = {}
      return state
    }
  }
})

export const { setUserSignIn, setUserSignOut } = userSlice.actions

export default userSlice.reducer
