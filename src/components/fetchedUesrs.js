import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserItems } from '../store/users/usersSlice';

const UserList = () => {
    const {userItem, isLoading, error} = useSelector((state) => state.users);
    console.log(userItem);
    console.log(isLoading);
    console.log(error);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserItems())
    },[]);

    return(
        <div>
      <h1>UsersList</h1>
      {isLoading && <div>...Loading...</div>}
      {error && <div>Error:{error}</div>}
      {!isLoading&&userItem.length ? (
        <ul>
          {userItem.map(user => (
           <li key={user.name.first}>{user.name.last} : {user.name.last}</li>))}
        </ul>) : null}
        </div>
    );
};

export default UserList;
