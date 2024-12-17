// localStorage.clear();

const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Project Report",
        "description": "Create the final report for the XYZ project.",
        "date": "2024-11-03",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Follow-Up",
        "description": "Email the client to confirm project details.",
        "date": "2024-11-02",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Team Meeting Preparation",
        "description": "Prepare agenda and slides for the upcoming team meeting.",
        "date": "2024-11-01",
        "category": "Preparation"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Jane",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review the latest code submitted by the development team.",
        "date": "2024-11-03",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update Project Roadmap",
        "description": "Refine and update the roadmap for the ABC project.",
        "date": "2024-11-02",
        "category": "Planning"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Alice",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Database Optimization",
        "description": "Optimize queries in the primary database.",
        "date": "2024-10-31",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write Test Cases",
        "description": "Create comprehensive test cases for new module.",
        "date": "2024-11-03",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Design Mockups",
        "description": "Create initial mockups for client review.",
        "date": "2024-11-02",
        "category": "Design"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Bob",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Monthly Report",
        "description": "Analyze and report on the monthly performance metrics.",
        "date": "2024-11-03",
        "category": "Analysis"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "System Audit",
        "description": "Conduct a security audit on all systems.",
        "date": "2024-10-29",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update Documentation",
        "description": "Update the documentation for the recent project changes.",
        "date": "2024-11-01",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Charlie",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Customer Feedback Analysis",
        "description": "Analyze feedback received from the recent customer survey.",
        "date": "2024-10-30",
        "category": "Feedback"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Develop Feature X",
        "description": "Implement new feature as per client specifications.",
        "date": "2024-11-03",
        "category": "Development"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Craig",
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}