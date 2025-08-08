import React, { useState } from 'react'
import Create from './create'

const Home = () => {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h2>Todo list</h2>
        <Create/>
        {

            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                <div>
                    {todo}
                </div>

            ) )
        }

    </div>
  )
}

export default Home