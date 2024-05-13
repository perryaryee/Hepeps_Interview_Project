import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        modal: false,
    },

    reducers: {
        Show_Modal: (state, action) => {
            state.modal = true;
        },

        Close_Modal: (state, action) => {
            state.modal = false;
        },
    },
});

export const { Show_Modal, Close_Modal } = ModalSlice.actions;
// Selector to get dispatched Data
export const selectModal = (state) => state.modal.modal;
export default ModalSlice.reducer;
