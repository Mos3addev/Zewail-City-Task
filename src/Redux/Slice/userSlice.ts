import { User } from '../../Interfaces/Interfaces';
import userData from '../../data/users.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: userData,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    removeInterest(state, action: PayloadAction<{ userId: number; interest: number }>) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId && user.interests) {
          user.interests = user.interests.filter((i:any) => i !== action.payload.interest);
        }
        return user;
      });
    },
    removeFollower(state, action: PayloadAction<{ userId: number; followerId: number }>) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId) {
          user.following = user.following.filter((f : any) => f !== action.payload.followerId);
        }
        return user;
      });
    },
  },
});

export const { deleteUser, removeInterest, removeFollower } = userSlice.actions;
export default userSlice.reducer;
