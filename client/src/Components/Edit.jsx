import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: ""
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/employees/${id}`);
        setFormData({
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone,
          designation: res.data.data.designation,
          salary: res.data.data.salary
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setMessage("Failed to fetch employee details");
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/employees/${id}`, formData);
      alert("Employee updated successfully!");
      navigate("/home"); 
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Update failed");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Edit Employee</h2>

      {message && <div className="alert alert-danger">{message}</div>}

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default Edit;
