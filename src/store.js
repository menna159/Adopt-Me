import {configureStore} from '@reduxjs/toolkit';
import adoptedPet from './adoptedPetSlice';
import {petApi} from './petApiService';
const store = configureStore({
  reducer: {
    adoptedPet,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});
export default store;
