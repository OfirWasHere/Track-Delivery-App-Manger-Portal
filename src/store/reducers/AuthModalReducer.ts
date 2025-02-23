import { createSlice } from "@reduxjs/toolkit";

// App state
export interface AuthModalState {
    isOpen: boolean;
}

// Initial State
const initialState: AuthModalState = {
    isOpen: false,
}

export const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        closeAuthModal: (state) => {
            state.isOpen = false
        },
        openAuthModal: (state) => {
            state.isOpen = true
        },
    }
})

// export actions
export const { closeAuthModal, openAuthModal } = authModalSlice.actions

// export reducer
export default authModalSlice.reducer;