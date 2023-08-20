import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts'

interface UserFields {
    id: number;
    display_name: string;
    email: string;
    token: string;
}

interface AuthState {
    id: number | null;
    display_name: string | null;
    email: string | null;
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    id: null,
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
            state.id = action.payload.id;
            state.display_name = action.payload.display_name;
            state.email = action.payload.email;
            state.token = action.payload.token
        }
    }
})

export const { updateUser } = authSlice.actions;

export const reducer = authSlice.reducer;

export const selectCurrentUser = (state: RootState) => ({
    display_name: state.auth.display_name,
    id: state.auth.id,
    email: state.auth.email
})
