import React, { useState } from 'react';
import SettingForm from './SettingForm';
import Form from './Form';
const FormDisplay = (props) => {
    const { user } = props;
    const [person, setPerson] = useState({
        name: '',
        email: '',
        role: ''
    })
    const [edit, setEdit] = useState(false);
    console.log(user[0]);
    if (user) {
        console.log(user.length)
        user.map(e => setStuff(e))
    }
    function setStuff(e) {
        console.log(e)

    }
    function editor(e) {
        console.log(e)
    }
    function handleChange(event) {
        //setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted: ", user);
        //setter(user)
    }
    if (edit) {
        return props.user.map(e => {
            return (<form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" value={e.name} onChange={handleChange}></input>
                <input type="email" name="email" placeholder="Enter your email" value={e.email} onChange={handleChange}></input>
                <input type="text" name="role" placeholder="Enter your role" value={e.role} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>)
        })
    }
    else {
        return (<div>
            {props.user.map(e => <div><div>{e.name}</div><div>{e.email}</div><div>{e.role}</div></div>)}
        </div>)
    }



}

export default FormDisplay;