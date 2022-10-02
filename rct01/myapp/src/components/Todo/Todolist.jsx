import React from 'react'

const Todolist = ({list, handelToggle}) => {
  return (
    <div>
    {list.map((e) => (
      <p key={e.id} >
        {e.title} - {e.status ? "Done" : "Not Done"}
        <button onClick={()=>{handelToggle(e.id, e.title)}}>toggle</button>
      </p>  
    ))}
    </div>
  )
}

export default Todolist