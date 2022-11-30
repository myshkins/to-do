const renderDeskContainer = (title) => {
  const deskContainer = document.createElement('div')
  deskContainer.classList.add('desk-container')
  deskContainer.id = `desk-container-${title}`
  document.body.appendChild(deskContainer)
}

const defaultRenderProject = (project) => {
  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  projectContainer.id = `project-container-${project.projectTitle}`
  const desk = document.querySelector('.desk-container')
  desk.appendChild(projectContainer)
}

// const renderDeskNav = () => {

// }

const defaultRenderTodo = (project) => {
  const projectContainer = document.getElementById('project-container-main')
  project.todoArray.forEach((element) => {
    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo-container')
    todoContainer.id = `todo-container-${element.todoTitle}`
    const todoTitle = document.createElement('div')
    todoTitle.classList.add('todo-title')
    todoTitle.textContent = element.todoTitle
    todoContainer.appendChild(todoTitle)
    const todoDescrip = document.createElement('div')
    todoDescrip.classList.add('todo-descrip')
    todoDescrip.textContent = element.todoDescrip
    todoContainer.appendChild(todoDescrip)
    projectContainer.appendChild(todoContainer)
  })
}

const renderTodos = (e) => {
  const projectTitle = e.target.id
  const project = document.getElementById(projectTitle)
  project.todoArray.array.forEach((element) => {
    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo-container')
    todoContainer.id = `todo-container ${element.todoTitle}`
  })
}

export {
  defaultRenderProject,
  defaultRenderTodo,
  renderDeskContainer,
  renderTodos,
}
