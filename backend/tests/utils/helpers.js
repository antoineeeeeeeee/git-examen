function validateEmail(email) {
  if (!email) return false; 
  return email.includes('@') && email.includes('.');
}

function formatTaskResponse(task) {
  if (!task) return null;
  return {
    id: task.id,
    title: task.title,
    status: task.status || 'todo',
    priority: task.priority || 'medium'
  };
}

module.exports = { validateEmail, formatTaskResponse };