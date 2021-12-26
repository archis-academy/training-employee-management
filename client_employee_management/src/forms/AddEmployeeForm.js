import React, { useState } from 'react'

const AddEmployeeForm = props => {
	const initialFormState = { id: null, name: '', lastname: '' }
	const [ employee, setEmployee ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setEmployee({ ...employee, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!employee.name || !employee.lastname) return

				props.addEmployee(employee)
				setEmployee(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={employee.name} onChange={handleInputChange} required/>
			<label>Lastname</label>
			<input type="text" name="lastname" value={employee.lastname} onChange={handleInputChange} required/>
			<button>Add new employee</button>
		</form>
	)
}

export default AddEmployeeForm
