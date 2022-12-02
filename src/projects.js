const todo = (title, description, priority) => {
  const todoTitle = title;
  const todoDescrip = description;
  const todoPriority = priority;

  return {
    todoTitle, todoDescrip, todoPriority,
  }
}

const project = (title) => {
  const projectTitle = title
  const todoArray = []
  const addTodo = (tdTitle, tdDescription, tdPriority) => {
    const newTodo = todo(tdTitle, tdDescription, tdPriority)
    todoArray.push(newTodo)
  }
  return {
    addTodo,
    projectTitle,
    todoArray,
  }
}

const workspace = (title) => {
  const workspaceTitle = title
  const projects = {}
  const addProject = (projectTitle) => {
    const newProject = project(projectTitle)
    projects[projectTitle] = newProject
  }
  return {
    addProject,
    workspaceTitle,
    projects,
  }
}

export {
  project,
  todo,
  workspace,
}
