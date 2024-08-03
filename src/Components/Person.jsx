import './Person.css'
import { useState, useEffect } from 'react'

const Person = ({ persons, search, onDelete }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  
    return (
      <div>
        <button onClick={toggleVisibility}> hide </button>
        {persons.filter((person)=>{
          return search.toUpperCase() === '' ? person : person.name.toUpperCase().includes(search.toUpperCase())
        }).map(person => 
            <div className='phonebook' key={person.id} style={hideWhenVisible} >
                  <li>{person.name}</li>  
                  <li>{person.number}</li>
                  <li>
                    <button onClick={() => onDelete(person.id)}>Delete</button>
                  </li>
            </div>
        )}
      </div>
  )
}
      
export default Person