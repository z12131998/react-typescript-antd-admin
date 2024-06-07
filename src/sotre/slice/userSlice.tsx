import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo:{
            username:"",
            token:""
        }
    },
    reducers: {
        setUserInfo: (state,action: PayloadAction<string>) =>{
            state.userInfo.username = action.payload;
        }
    }
})

export const {setUserInfo} = userSlice.actions;

export default userSlice.reducer;