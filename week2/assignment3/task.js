const {
  validateTitle,
  validatePriority,
  validateDueDate
} = require("./validator.js");

const tasks = [];
let id = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid priority";
  if (!validateDueDate(dueDate)) return "Invalid due date";

  tasks.push({
    id: id++,
    title,
    priority,
    dueDate,
    completed: false
  });

  return "Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return "Task not found";

  task.completed = true;
  return "Task marked as completed";
}

module.exports = {
  addTask,
  getAllTasks,
  completeTask
};
