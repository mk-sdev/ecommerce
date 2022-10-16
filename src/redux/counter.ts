import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ReservationState{
    value: any
}

const initialState: ReservationState={
    value: []
}

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<any>)=>{
            state.value.push(action.payload)
        },
        changeQuantity: (state, action: PayloadAction<any>)=>{
            // state.value[action.payload[1]] = state.value[action.payload[1]] +  action.payload[0]
            state.value[action.payload[1]][4] +=action.payload[0] 

        },
        deleteBook: (state, action: PayloadAction<any>)=>{
                    state.value = state.value.filter((el:any)=>{return el[0]!==action.payload})
        },   
        setQuantity: (state, action: PayloadAction<any>)=>{
            state.value[action.payload[1]][4] = action.payload[0] 
        },   
    },
})

export const {addReservation, changeQuantity, deleteBook, setQuantity} = reservationsSlice.actions

export default reservationsSlice.reducer