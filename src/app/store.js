const { configureStore } = require('@reduxjs/toolkit');
const productsReducer = require('./reducer/productsSlice');

export default configureStore({
    reducer: {
      products : productsReducer
    },
  })





