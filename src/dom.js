const renderDeskContainer = (title) => {
  const deskContainer = document.createElement('div')
  deskContainer.classList.add('desk-container')
  deskContainer.id = `desk-container-${title}`
  document.body.appendChild(deskContainer)
}

const renderTodos = (project) => {
  const projectContainer = document.getElementById(`project-container-${project.projectTitle}`)
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
  const addTodoButton = document.createElement('button')
  addTodoButton.classList.add('add-todo-btn')
  addTodoButton.textContent = '+ task'
  projectContainer.appendChild(addTodoButton)
}

const renderProject = (project) => {
  const desk = document.querySelector('.desk-container')
  if (document.querySelector('.project-container') == null) {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')
    projectContainer.id = `project-container-${project.projectTitle}`
    desk.appendChild(projectContainer)
  }
  const projectContainer = document.querySelector('.project-container')
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild)
  }
  renderTodos(project)
}

const plusProject = (workspace) => {
  const title = prompt('enter project name')
  workspace.addProject(title)
  renderProject(workspace.projects.title)
}

const renderNav = (workspace) => {
  if (document.querySelector('.nav-bar') == null) {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')
    const desk = document.querySelector('.desk-container')
    desk.appendChild(navBar)
  }
  const navBar = document.querySelector('.nav-bar')
  while (navBar.firstChild) {
    navBar.removeChild(navBar.firstChild)
  }
  const projectArray = Object.keys(workspace.projects)
  projectArray.forEach((key) => {
    const tab = document.createElement('div')
    tab.classList.add('project-tab')
    tab.textContent = key
    navBar.appendChild(tab)
  })
  const addProjectButton = document.createElement('button')
  addProjectButton.classList.add('add-project-btn')
  addProjectButton.textContent = '+ project'

  navBar.appendChild(addProjectButton)
}

export {
  plusProject,
  renderProject,
  renderDeskContainer,
  renderNav,
  renderTodos,
}
