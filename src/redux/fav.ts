import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface FavState{
    value: any
}

const initialState: FavState={
    value: []
}

export const favSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<any>)=>{
            state.value.push(action.payload)
        },
        delFav: (state, action: PayloadAction<any>)=>{
            // alert(typeof(action.payload))
            state.value = state.value.filter((el:any)=>{return el[0]!==action.payload})
        },   
        setFav: (state, action: PayloadAction<any>)=>{
            state.value=action.payload
        },
    },
})

export const {addFav, delFav, setFav} = favSlice.actions

export default favSlice.reducer