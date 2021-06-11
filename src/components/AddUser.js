import React, {useState,useContext} from 'react';
import { Link , useHistory} from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid';
export const AddUser = () => {
    const [name, setName] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history =useHistory()
    const onSubmit = ()=>{
        const newUser={
            id:uuid(),
            name
        }
        addUser(newUser);
        history.push('/')
    }
    const onChange=(e)=>{
        setName(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit }>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name}  placeholder="Enter Name" onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit" style={{marginRight:"15px",marginTop:"10px"}}>Submit</Button>
            <Link to="/" className="btn btn-danger ml-2" style={{marginTop:"10px"}}>Cancel</Link>
        </Form>
    )
}
