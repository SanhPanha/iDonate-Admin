import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import registerSlice from '@/features/auth/registerSlice'

const makeStore = configureStore({
  reducer: {
    auth: authReducer,
    register: registerSlice,
  },
})

// Infer the type of RootState and AppDispatch
export type RootState = ReturnType<typeof makeStore.getState>
export type AppDispatch = typeof makeStore.dispatch

export default makeStore;
