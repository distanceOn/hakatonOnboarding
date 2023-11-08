import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  name: 'user',
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth = payload
    },
  },
})

export const { setAuth } = UserSlice.actions

export const UserReducer = UserSlice.reducer
