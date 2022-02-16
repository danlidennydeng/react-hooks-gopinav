import React, {useState} from 'react'  
import useInput from './useInput'

function UserForm2() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput('')

  const [lastName, bindLastName, resetLastName] = useInput('')
  
  const submitHandler = e => {
    e.preventDefault()
    alert(`hello! ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name 2</label>
          <input 
            {...bindFirstName}
            type="text" 
          />

        </div>

        <div>
          <label>Last Name 2</label>
          <input 
            {...bindLastName}
            type="text" 
          />
          
        </div>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default UserForm2