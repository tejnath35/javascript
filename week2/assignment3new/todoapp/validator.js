// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  return title && title.trim().length >= 3;
}

// 2. Validate priority (low, medium, high)
function validatePriority(priority) {
  return ["low", "medium", "high"].includes(priority);
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const d = new Date(date);
  return !isNaN(d) && d > new Date();
}

module.exports = {
  validateTitle,
  validatePriority,
  validateDueDate
};
