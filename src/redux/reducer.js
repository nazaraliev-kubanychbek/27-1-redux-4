import {createReducer, createAction} from '@reduxjs/toolkit';

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const SET_TEXT = 'SET_TEXT';
const RESET_NUM = 'RESET_NUM';

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const setText = createAction(SET_TEXT);
export const resetNum = createAction(RESET_NUM);

const ininitialState = {
    num: 0,
    text: 'Hello World!',
}

export default createReducer(ininitialState, (builder)=>{
        builder
        .addCase(INCREMENT_NUM, (state, action)=>{
            if(state.num < 15) state.num++
        })
        .addCase(DECREMENT_NUM, (state)=>{
            if(state.num > 0) state.num--
        })
        .addCase(SET_TEXT, (state, action)=>{
            state.text = action.payload
        })
        .addCase(RESET_NUM, (state)=>{
            state.num = 0
        })
})