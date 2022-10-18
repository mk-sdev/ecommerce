import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface BookState{
    value: any
}

const initialState: BookState={
    value: []
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<any>)=>{
            state.value.push(action.payload)
        },
        changeQuantity: (state, action: PayloadAction<any>)=>{
            state.value[action.payload[1]][4] +=action.payload[0] 
        },
        deleteBook: (state, action: PayloadAction<any>)=>{
            state.value = state.value.filter((el:any)=>{return el[0]!==action.payload})
        },   
        setQuantity: (state, action: PayloadAction<any>)=>{
            state.value[action.payload[1]][4] = action.payload[0] 
        },   
        setBooks: (state, action: PayloadAction<any>)=>{
            state.value=action.payload
        },   
    },
})

export const {addBook, changeQuantity, deleteBook, setQuantity, setBooks} = booksSlice.actions

export default booksSlice.reducer