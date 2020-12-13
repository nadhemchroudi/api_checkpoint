import React from "react";
import {Card} from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <h3 className='card-title'>{user.name}</h3>
            <h4 className='card-title'>{user.username}</h4>
            <h4 className='card-title'>{user.email}</h4>
            <h4 className='card-title'>Adress</h4>
            <h6 className="card-title">{user.address.street}</h6>
            <h6 className="card-title">{user.address.suite}</h6>
            <h6 className="card-title">{user.address.city}</h6>
            <h6 className="card-title">{user.address.zipcode}</h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
