import React from 'react'
import { combineReducers } from 'redux'
import authSlice from './authSlice';

const rootReducers = combineReducers({
    auth: authSlice,
});

export default rootReducers