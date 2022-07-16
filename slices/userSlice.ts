import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'item',
    initialState: {
        item: null,
        basket: '',
    },
    reducers: {
        add: (state, action) => {
            state.item = action.payload;
        },
        addBasket: (state, action) => {
            state.basket = action.payload;
        }
    },
});

export const { add, addBasket }: any = userSlice.actions;

export const selectUser = (state: any) => state.user.item;
export const selectBasket = (state: any) => state.user.basket;

export default userSlice.reducer;