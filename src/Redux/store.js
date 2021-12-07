import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slice/productsSlice'
import usersReducer from './slice/usersSlice'
import dataReducer from './slice/dataSlice'

export default configureStore({
    reducer: {
        products : productsReducer,
        users : usersReducer,
        data : dataReducer

    }
  })

