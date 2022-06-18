import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
		counter: persistedReducer,
	},
	middleware: [thunk]
})