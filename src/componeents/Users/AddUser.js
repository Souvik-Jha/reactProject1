import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {

    const addUserHandler = (event)=>{
        event.preventdefault()
        
    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <lable htmlFor="username"> Username</lable>
            <input id="username" type="text" />
            <lable htmlFor="age"> Age (Years)</lable>
            <input id="age" type="number" />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser