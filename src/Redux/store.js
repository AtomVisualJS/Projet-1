import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slice/productsSlice'
import usersReducer from './slice/usersSlice'

export default configureStore({
    reducer: {
        products : productsReducer,
        users : usersReducer,

    }
  })

