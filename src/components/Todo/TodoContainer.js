import React from 'react'
import TodoItem from './TodoItem'

export default function TodoContainer(props) {
  const listItems = props.todos.map((item) => {
    return <TodoItem
       key={item.id}
       deleteTodo={props.deleteTodo}
        updateTodo={props.updateTodo}
         id={item.id} name={item.name}
          content={item.content}
          image={item.image} />
  })

  return(
    <React.Fragment>

    {listItems}


    </React.Fragment>
  )
}
