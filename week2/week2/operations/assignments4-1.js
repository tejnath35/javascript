// -------- DATA --------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// -------- LOGIC --------
const getActiveUsers = (users) =>
  users.filter(user => user.active);

const getActiveUserNames = (users) =>
  users.filter(user => user.active).map(user => user.name);

const isAdminExists = (users) =>
  users.some(user => user.role === "admin");

const findUserById = (users, id) =>
  users.find(user => user.id === id);

const deactivateUser = (users, id) =>
  users.map(user =>
    user.id === id ? { ...user, active: false } : user
  );

// -------- EXECUTION --------
console.log("Active Users:", getActiveUsers(users));
console.log("Active User Names:", getActiveUserNames(users));
console.log("Admin Exists:", isAdminExists(users));
console.log("Find User (ID=2):", findUserById(users, 2));
console.log("Deactivate User (ID=1):", deactivateUser(users, 1));
