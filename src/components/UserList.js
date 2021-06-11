import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem,Button} from 'reactstrap';
export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    console.log('------------',users);
    return (
        <ListGroup>
        {users.map(user=>(
            <ListGroupItem className="d-flex">
                <strong>{user.name}</strong>
                <div className="ml-auto">
                    <Link to={`/edit/${user.id}`} className="btn btn-warning" style={{marginLeft:"200px", marginRight:"6px"}}>Edit</Link>
                    <Button color="danger" onClick={()=> removeUser(user.id)}>Delete</Button>
                </div>
            </ListGroupItem>
        ))}
        </ListGroup>
    )
}
