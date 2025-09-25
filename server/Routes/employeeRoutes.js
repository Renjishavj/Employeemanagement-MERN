const express = require("express");
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getSalaries 
} = require("../Controller/employeeController");

const router = express.Router();

router.route("/")
  .get(getEmployees)
  .post(createEmployee);

router.route("/salaries") 
  .get(getSalaries);

router.route("/:id")
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
