import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserFields {
    display_name: string;
    email: string;
    token: string;
}

interface AuthState {
    display_name: string | null;
    email: string | null;
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    display_name: null,
    email: null,
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<UserFields>) => {
            state.display_name = action.payload.display_name;
            state.email = action.payload.email;
            state.token = action.payload.token
        }
    }
})

export const { updateUser } = authSlice.actions;

export const reducer = authSlice.reducer;
