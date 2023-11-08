import { configureStore } from '@reduxjs/toolkit'

import { UserReducer } from '@/shared/model/userSlice'

export const appStore = configureStore({
  reducer: {
    user: UserReducer,
  },
})

export type RootState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch
