import React, { useState } from 'react';
import FormDisplay from './FormDisplay';
const Form = (props) => {
    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const setter = props.setter;
    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted: ", user);
        setter(user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your name" value={user.name} onChange={handleChange}></input>
            <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleChange}></input>
            <input type="text" name="role" placeholder="Enter your role" value={user.role} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>

    )
}
export default Form;