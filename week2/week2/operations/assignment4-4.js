// -------- DATA --------
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// -------- LOGIC --------
const getRoleNames = (roles) =>
  Object.keys(roles);

const canStudentDelete = (roles) =>
  roles.student.includes("delete");

const getAllUniquePermissions = (roles) =>
  [...new Set(Object.values(roles).flat())];

const addModeratorRole = (roles) => ({
  ...roles,
  moderator: ["view", "update"]
});

// -------- EXECUTION --------
console.log("Role Names:", getRoleNames(roles));
console.log("Can Student Delete:", canStudentDelete(roles));
console.log("Unique Permissions:", getAllUniquePermissions(roles));
console.log("Add Moderator Role:", addModeratorRole(roles));
