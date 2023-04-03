import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExists = localStorage.getItem('user')

const initialState = {
    user: userExists ? JSON.parse(userExists) : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(loginUser.pending , (state)=>{
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled ,  (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(loginUser.rejected , (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.isLoading = false
                state.isSuccess = false
                state.isError = false
                state.message = ''
            })

    }
})

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await authService.registerUser(userData)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
        //    alert(error.response.data.message);
    }
})
export const loginUser = createAsyncThunk('auth/login', async (userData , thunkAPI) => {
    try {
        return await authService.loginUser(userData)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }

})
export const logoutUser = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('user')
})
export default authSlice.reducer
