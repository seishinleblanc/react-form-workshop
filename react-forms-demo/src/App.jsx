import { useState } from 'react'
import './App.css'
import JWTExample from './components/JWTEXample'

function App() {

  const [ count, setCount ] = useState(0)
  const [ name, setName ] = useState('')
  const [ error, setError ] = useState('')

  function formSubmit(event) {
    // FIRST THING, stop the default function of the form
    event.preventDefault()

    // const form = event.target
    // const data = new FormData(form)

    // console.log(data)
    console.log('FINAL:', name)
    setName('')
  }

function nameValidation(event) {
  const newName = event.target.value

  if (newName.length < 8) {
    setError('Name needs to be at least 8 characters')
  } else {
    setError('')
  }
}

  return (
//       <div>
//         <form onSubmit={formSubmit}>
//           <label>Name: </label>
//           <input value ={name} name='name' onChange={nameValidation} />
//           <button>Send</button>
//         </form>

//         {count}
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//   )
// }
< JWTExample />
  )

export default App
