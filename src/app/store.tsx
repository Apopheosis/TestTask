import {createStore, ThunkAction, Action, configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {authReducer} from "./authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'

export const store = createStore(authReducer, composeWithDevTools())
