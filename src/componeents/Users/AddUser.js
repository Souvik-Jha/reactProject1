import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("")
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'incalid input',
                message: 'please enter a vlid name and age (non-empty)'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'incalid age',
                message: 'please enter a vlid age (>0)'
            })
            return
        }
        props.onAddUser(enteredUserName, enteredAge)

        setEnteredUserName("")
        setEnteredAge("")
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () =>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} message = {error.message} onConfirm={errorHandler}/>}
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <lable htmlFor="username"> Username</lable>
                        <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                        <lable htmlFor="age"> Age (Years)</lable>
                        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
        </div>
    )
}

export default AddUser 