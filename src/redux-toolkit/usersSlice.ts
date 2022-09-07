import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  age: number;
}
type InitialState = {
  users: User[];
};

const initialState: InitialState = {
  users: [
    { id: '1', name: 'Victor', age: 20 },
    { id: '2', name: 'Dima', age: 21 },
  ],
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser(state: InitialState, { payload }: PayloadAction<User>) {
      state.users.push(payload);
    },
    removeUser(state: InitialState, { payload }: PayloadAction<User['id']>) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;
