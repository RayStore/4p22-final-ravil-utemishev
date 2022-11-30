import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	totalAmount: 0,
	totalQuantity: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.cartItems.find(item => item.id === newItem.id);

			state.totalQuantity++;

			if (!existingItem) {
				state.cartItems.push({
					id: newItem.id,
					productName: newItem.name,
					imgUrl: newItem.imgUrl,
					cost: newItem.cost,
					quantity: 1,
					totalPrice: newItem.cost
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.cost);
			}
			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.cost) * Number(item.quantity),
				0
			);
		},

		deleteItem: (state, action) => {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
				state.totalQuantity = state.totalQuantity - existingItem.quantity;
			}

			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.cost) * Number(item.quantity), 0
			);
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
