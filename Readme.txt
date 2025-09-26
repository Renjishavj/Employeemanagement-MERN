Postman URLs and the corresponding JSON data you can use to test the APIs.

1. Create an Employee (POST)
    Method: POST

    URL: http://localhost:5000/api/employees

    Test data:

    "name": "Renjisha",
    "email": "renjishavj@gmail.com",
    "phone": "9895604739",
    "designation": "MERN Stack Trainer",
    "salary":25000

2. Get All Employees (GET)
    Method: GET

    URL: http://localhost:5000/api/employees

3. Get a Single Employee (GET)
    Method: GET

    URL: http://localhost:5000/api/employees/{employeeId} 

    Example:http://localhost:5000/api/employees/68d4c3bd9c5ace19c88e708c

4. Update an Employee (PUT)
    Method: PUT

    URL: http://localhost:5000/api/employees/{employeeId} 

5. Delete an Employee (DELETE)
    Method: DELETE

    URL: http://localhost:5000/api/employees/{employeeId}

6.Search by salary
    Method: GET

    URL:http://localhost:5001/api/employees/salaries?minSalary=${minSalary}

    Example:http://localhost:5001/api/employees/salaries?minSalary=25000



