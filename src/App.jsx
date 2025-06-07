import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './redux/userSlice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleSetUser = () => {
    dispatch(setUser({ name: 'John', age: 30 }));
  };

  const handleClearUser = () => {
    dispatch(setUser({}));
  };

  console.log("user " , user)

 

  return (
    <div>
  <h2>User Info</h2>

  {user && Object.keys(user).length > 0 ? (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  ) : (
    <p>No user info</p>
  )}

  <button onClick={handleSetUser}>Set User</button>
  <button onClick={handleClearUser}>Clear User</button>
</div>
  );
};

export default App;
