import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice/usersSlice'
import dataReducer from './slice/dataSlice'

export default configureStore({
    reducer: {
        users : usersReducer,
        data : dataReducer

    }
  })

