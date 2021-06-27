import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';

export type StoreState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    user: userReducer
  },
})

export default store;