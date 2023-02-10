import React,{useState} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName] = useState("")
    const [enteredAge,setEnteredAge] = useState('')

    const addUserHandler = (event)=>{
        event.preventDefault()
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0) return
        if(+enteredAge<1) return
        props.onAddUser(enteredUserName,enteredAge)
        
        setEnteredUserName("")
        setEnteredAge("")
    }

    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }

    return (
        <ErrorModel title = 'An error occured'>
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <lable htmlFor="username"> Username</lable>
            <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
            <lable htmlFor="age"> Age (Years)</lable>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </ErrorModel>
    )
}

export default AddUser 