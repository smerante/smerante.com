import { createSlice } from '@reduxjs/toolkit'
import { UserAction, IUser } from '../types';

const initialUserState: IUser = {
    name: 'Please Sign In'
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        addUser: (userState = initialUserState, action: UserAction) => {
            userState.name = action.payload.name;
        }
    },
})

// Action creators are generated for each case reducer function

export const { addUser } = userSlice.actions;

export default userSlice.reducer;