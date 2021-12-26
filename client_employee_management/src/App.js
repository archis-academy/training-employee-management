import React, { useState, Fragment, useEffect } from 'react'
import AddEmployeeForm from './forms/AddEmployeeForm'
import EditEmployeeForm from './forms/EditEmployeeForm'
import EmployeeTable from './tables/EmployeeTable'
import { getEmployees, createEmployee, updateEmployee, removeEmployee } from './api/employees'

const App = () => {

	const initialFormState = { id: null, name: '', lastname: '' }

	// Setting state
	const [ employees, setEmployees ] = useState([])
	const [ currentEmployee, setCurrentEmployee ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	useEffect(() => {
		fetchEmployees();
	  }, []);

	const fetchEmployees = async () => {
		const result = await getEmployees();
		setEmployees(result.data);
	};

	// CRUD operations
	const addEmployee = async employee => {
		delete employee.id;
		await createEmployee(employee);
		fetchEmployees();
	}

	const deleteEmployee = async id => {
		await removeEmployee(id);
		setEditing(false)
		fetchEmployees();
	}

	const editEmployee = async (employee) => {
		await updateEmployee(employee);
		fetchEmployees();
		setCurrentEmployee({ id: employee.id, name: employee.name, lastname: employee.lastname })
	}

	const editRow = employee => {
		setEditing(true)
		setCurrentEmployee({ id: employee.id, name: employee.name, lastname: employee.lastname })
	}

	return (
		<div className="container">
			<h1>Employee Management App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit employee</h2>
							<EditEmployeeForm
								editing={editing}
								setEditing={setEditing}
								currentEmployee={currentEmployee}
								editEmployee={editEmployee}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add employee</h2>
							<AddEmployeeForm addEmployee={addEmployee} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View employees</h2>
					<EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
				</div>
			</div>
		</div>
	)
}

export default App
