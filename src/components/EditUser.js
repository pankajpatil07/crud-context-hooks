import React, {useState,useContext, useEffect} from 'react';
import { Link , useHistory} from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const EditUser = (props) => {
    const [selectedUSer, setSelectedUSer] = useState({
        id:'',
        name:''
    });
    const {users, editUser} = useContext(GlobalContext);
    const history =useHistory();
    const currentUserId = props.match.params.id;

    useEffect(()=>{
        const userId = currentUserId;
        const selectedUSer = users.find(user => user.id === userId);
        setSelectedUSer(selectedUSer);
    },[currentUserId, users])

    const onSubmit = ()=>{
        editUser(selectedUSer);
        history.push('/')
    }
    const onChange=(e)=>{
        setSelectedUSer({...selectedUSer,[e.target.name]:e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Enter Name" value={selectedUSer.name} onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit" style={{marginRight:"15px",marginTop:"10px"}}>Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2" style={{marginTop:"10px"}}>Cancel</Link>
        </Form>
    )
}
