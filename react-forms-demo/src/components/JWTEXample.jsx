import { useState } from 'react'

export default function JWTExample() {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    async function handleSubmit(event) {
        // FIRST THING
        event.preventDefault()

        // POST REQUEST HERE
        // Add the fetch call here and use the username and password
    }

    return <>
    <form>
        <label name='username'>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'>Sign up</button>

    </form>

    <div>
        Profile of the person
    </div>
    
    </>
}