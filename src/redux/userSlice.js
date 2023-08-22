import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  // ... other user properties
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      // ... set other user properties
    },
    // ... other reducers if needed
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
