const {
  addTask,
  getAllTasks,
  completeTask
} = require("./task.js");

console.log("=== TODO APP ===");

console.log(addTask("Learn JavaScript", "high", "2030-01-01"));
console.log(addTask("Buy Groceries", "medium", "2030-02-01"));

console.log("\nAll Tasks:");
console.log(getAllTasks());

console.log("\nComplete Task ID 1:");
console.log(completeTask(1));

console.log("\nUpdated Tasks:");
console.log(getAllTasks());
