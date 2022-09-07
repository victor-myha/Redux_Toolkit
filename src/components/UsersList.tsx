import React, { useCallback } from 'react';
import { removeUser, User } from '../redux-toolkit/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-toolkit';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.usersSlice.users);

  const handleDeleteUser = useCallback(
    (idToRemove: User['id']) => {
      dispatch(removeUser(idToRemove));
    },
    [dispatch]
  );

  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <span>
              {user.name} {user.age} <button onClick={() => handleDeleteUser(user.id)}>X</button>
            </span>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
