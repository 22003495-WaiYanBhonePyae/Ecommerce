import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }

            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        incrementItem(state, action) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity++;
                state.totalQuantity++;
                state.totalAmount += item.price;
            }
        },
        decrementItem(state, action) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item && item.quantity > 0) {
                item.quantity--;
                state.totalQuantity--;
                state.totalAmount -= item.price;

                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
        deleteItem(state, action) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalAmount -= item.price * item.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    },
});

export const { addItem, incrementItem, decrementItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
