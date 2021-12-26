import React, { useState, useEffect } from 'react'

const EditEmployeeForm = props => {
  const [ employee, setEmployee ] = useState(props.currentEmployee)

  useEffect(
    () => {
      setEmployee(props.currentEmployee)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setEmployee({ ...employee, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.editEmployee(employee)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      <label>Lastname</label>
      <input type="text" name="lastname" value={employee.lastname} onChange={handleInputChange} />
      <button>Update employee</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditEmployeeForm
