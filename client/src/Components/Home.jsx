import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [minSalary, setMinSalary] = useState("");

  // Fetch employees (with optional salary filter)
  const fetchEmployees = async () => {
    try {
      let url = "http://localhost:5001/api/employees";

      if (minSalary) {
        url = `http://localhost:5001/api/employees/salaries?minSalary=${minSalary}`;
      }

      const res = await axios.get(url);

      // API /salaries returns only name & salary → handle separately
      if (minSalary) {
        setEmployees(res.data.data);
      } else {
        setEmployees(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [minSalary]); // re-fetch when minSalary changes

  // Delete employee
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:5001/api/employees/${id}`);
        alert("Employee deleted successfully");
        fetchEmployees();
      } catch (error) {
        console.error(error);
        alert("Error deleting employee");
      }
    }
  };

  // Update employee
  const handleUpdate = (id) => {
    window.location.href = `/edit/${id}`;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Employee List</h2>

      {/* Salary filter */}
      <div className="mb-3 text-center">
        <input
          type="number"
          className="form-control w-50 mx-auto"
          placeholder="Enter minimum salary to filter"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            {!minSalary && <th>Email</th>}
            {!minSalary && <th>Phone</th>}
            {!minSalary && <th>Designation</th>}
            <th>Salary</th>
            {!minSalary && <th style={{ width: "120px" }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp, index) => (
              <tr key={emp._id || index}>
                <td>{emp.name}</td>
                {!minSalary && <td>{emp.email}</td>}
                {!minSalary && <td>{emp.phone}</td>}
                {!minSalary && <td>{emp.designation}</td>}
                <td>{emp.salary}</td>
                {!minSalary && (
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleUpdate(emp._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(emp._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={minSalary ? "2" : "6"} className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
