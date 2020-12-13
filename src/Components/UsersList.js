import React, { useEffect, useState } from 'react';
import UserCard from './UserCard'

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
    };
    fetchUsers();
  }, []);
  return (
    <div className='row mt-2'>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList




