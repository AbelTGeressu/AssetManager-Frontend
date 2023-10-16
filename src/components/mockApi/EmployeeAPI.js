import React, { useState, useEffect } from 'react';

const EmployeeAPI = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const addEmployee = async (employee) => {
    try {
      await fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      await fetch(`http://localhost:3000/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:3000/employees/${id}`, {
        method: 'DELETE',
      });
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Global ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.EmployeeId}>
                <td>{employee.GlobalId}</td>
                <td>{employee.FirstName}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Email}</td>
                <td>{employee.Department}</td>
                <td>{employee.Position}</td>
                <td>
                  <button onClick={() => deleteEmployee(employee.EmployeeId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Add form inputs and buttons to call addEmployee and updateEmployee here */}
    </div>
  );
};

export default EmployeeAPI;
