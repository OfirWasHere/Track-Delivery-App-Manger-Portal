import { createSlice } from "@reduxjs/toolkit";

// App state
export interface NavbarDrawerState {
    isOpen: boolean;
}

// Initial State
const initialState: NavbarDrawerState = {
    isOpen: false,
}

export const navbarDrawerSlice = createSlice({
    name: 'drawerState',
    initialState,
    reducers: {
        closeDrawer: (state) => {
            state.isOpen = false
        },
        openDrawer: (state) => {
            state.isOpen = true
        },
    }
})

// export actions
export const { closeDrawer, openDrawer } = navbarDrawerSlice.actions

// export reducer
export default navbarDrawerSlice.reducer;