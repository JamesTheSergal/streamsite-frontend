import React from 'react';

function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(event) => setUsername(event.target.value)} type="username" placeholder="username" id="username" name="username"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        
    );
}

export default Register;
