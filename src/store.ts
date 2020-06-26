import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@src/components/Home/Description/Counter/Counter.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  counter: counterReducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development'
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export const useStoreDispatch: () => AppDispatchType = () => useDispatch<AppDispatchType>()
export const useStoreSelector: TypedUseSelectorHook<AppState> = useSelector
