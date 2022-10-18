import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface FavState{
    value: any
}

const initialState: FavState={
    value: [['8exSvgAACAAJ', 'http://books.google.com/books/content?id=8exSvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Harry Potter and The Chamber of Secrets']]
}

export const favSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<any>)=>{
            state.value.push(action.payload)
        },
        delFav: (state, action: PayloadAction<any>)=>{
            state.value = state.value.filter((el:any)=>{return el[0]!==action.payload})
        },   
    },
})

export const {addFav, delFav} = favSlice.actions

export default favSlice.reducer