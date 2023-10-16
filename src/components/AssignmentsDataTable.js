import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const AssignmentComponent = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/Assignments')
      .then(response => {
        setAssignments(response.data);
        setSelectedAssignment(response.data[0]); // Select the first assignment initially
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleNext = () => {
    const currentIndex = assignments.indexOf(selectedAssignment);
    if (currentIndex < assignments.length - 1) {
      setSelectedAssignment(assignments[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = assignments.indexOf(selectedAssignment);
    if (currentIndex > 0) {
      setSelectedAssignment(assignments[currentIndex - 1]);
    }
  };

  const assignNewContract = (contractId) => {
    // Implement the logic to assign a new contract
    console.log('Assign new contract:', contractId);
  };

  const assignNewEmployee = (employeeId) => {
    // Implement the logic to assign a new employee
    console.log('Assign new employee:', employeeId);
  };

  const fetchAssetDetails = (assetId) => {
    // Fetch asset details from your API based on the assetId
    axios.get(`http://localhost:3001/Assets/${assetId}`)
      .then(response => {
        setSelectedAsset(response.data);
      })
      .catch(error => console.error('Error fetching asset details:', error));
  };

  const fetchContractDetails = (contractId) => {
    // Fetch contract details from your API based on the contractId
    axios.get(`http://localhost:3001/Contracts/${contractId}`)
      .then(response => {
        setSelectedContract(response.data);
      })
      .catch(error => console.error('Error fetching contract details:', error));
  };

  const fetchEmployeeDetails = (employeeId) => {
    // Fetch employee details from your API based on the employeeId
    axios.get(`http://localhost:3001/Employees/${employeeId}`)
      .then(response => {
        setSelectedEmployee(response.data);
      })
      .catch(error => console.error('Error fetching employee details:', error));
  };

  if (!selectedAssignment) return <p>Loading...</p>;

  const columns = [
    { field: 'AssignmentId', headerName: 'Assignment ID', width: 150 },
    // Add other columns as needed
  ];

  return (
    <div className="assignment">
      <Button variant="contained" onClick={handlePrevious} disabled={assignments.indexOf(selectedAssignment) === 0}>
        Previous
      </Button>
      <Button variant="contained" onClick={handleNext} disabled={assignments.indexOf(selectedAssignment) === assignments.length - 1}>
        Next
      </Button>

      <h2>Assignment ID: {selectedAssignment.AssignmentId}</h2>

      {selectedAsset && (
        <div>
          <h3>Asset Details</h3>
          {/* Display asset details here */}
        </div>
      )}

      {selectedContract && (
        <div>
          <h3>Contract Details</h3>
          {/* Display contract details here */}
        </div>
      )}

      {selectedEmployee && (
        <div>
          <h3>Employee Details</h3>
          {/* Display employee details here */}
        </div>
      )}

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={assignments}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionChange={(newSelection) => {
            setSelectedAssignment(newSelection.rows[0]);
            // Fetch details when a row is selected
            if (newSelection.rows.length > 0) {
              fetchAssetDetails(newSelection.rows[0].AssetId);
              fetchContractDetails(newSelection.rows[0].ContractId);
              fetchEmployeeDetails(newSelection.rows[0].EmployeeId);
            }
          }}
        />
      </div>

      {selectedAssignment.ContractId ? (
        <Button variant="contained" onClick={() => assignNewContract(selectedAssignment.ContractId)}>
          Change Contract
        </Button>
      ) : (
        <Button variant="contained" onClick={() => assignNewContract(null)}>
          Assign Contract
        </Button>
      )}

      {selectedAssignment.EmployeeId ? (
        <Button variant="contained" onClick={() => assignNewEmployee(selectedAssignment.EmployeeId)}>
          Change Employee
        </Button>
      ) : (
        <Button variant="contained" onClick={() => assignNewEmployee(null)}>
          Assign Employee
        </Button>
      )}
    </div>
  );
};

export default AssignmentComponent;
