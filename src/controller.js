import todo from './todo'
import { project, workspace } from './projects'

const controller = () => {
  const createWorkspace = (title) => {
    const newWorkspace = workspace(title)
    return newWorkspace
  }

  const createProject = (title) => {
    const newProject = project(title)
    return newProject
  }

  const createTodo = (title, description, priority) => {
    const newTodo = todo(title, description, priority)
    return newTodo
  }

  return {
    createWorkspace,
    createProject,
    createTodo,
  }
}

export default controller
