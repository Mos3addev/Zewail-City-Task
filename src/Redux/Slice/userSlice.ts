import { User } from '../../Interfaces/Interfaces';
import userData from '../../data/users.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  users: User[];
}
interface IPayload { 
  userId: number;
  interest?: number;
  followerId?: number;
}

// add follower property to users to set his followers
userData.map((user:User)=>{
  return user.follower = userData.filter((u:User)=> u.following.includes(user.id)).map((u:User)=> u.id)
})

const initialState: UserState = {
  users: userData,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== action.payload);
      // when delete user update follower and following in author users
      state.users.map((user:User) => user.following = user.following.filter((id)=> id !== action.payload));
      state.users.map((user:User) => user.follower = user.follower?.filter((id)=> id !== action.payload));
    },
    removeInterest(state, action: PayloadAction<IPayload>) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId && user.interests) {
          user.interests = user.interests.filter((i:any) => i !== action.payload.interest);
        }
        return user;
      });
    },
    removeFollowing(state, action: PayloadAction<IPayload>) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId) {
          user.following = user.following.filter((id : number) => id !== action.payload.followerId);
        }
        // remover userId from author followers
        if (user.id === action.payload.followerId){
          user.follower = user.follower?.filter((id: number)=> id !== action.payload.userId)
        }
        return user;
      });
    },
    removeFollower(state, action: PayloadAction<IPayload>) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId) {
          user.follower = user.follower?.filter((id : number) => id !== action.payload.followerId);
        }
        // remover userId from author following
        if (user.id === action.payload.followerId) {
          user.following = user.following?.filter((id : number) => id !== action.payload.userId);
        }
        return user;
      });
    },
  },
});

export const { deleteUser, removeInterest, removeFollowing,removeFollower } = userSlice.actions;
export default userSlice.reducer;
