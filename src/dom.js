const renderDeskContainer = (title) => {
  const deskContainer = document.createElement('div')
  deskContainer.classList.add('desk-container')
  deskContainer.id = `desk-container-${title}`
  document.body.appendChild(deskContainer)
}

const renderTodos = (project) => {
  const projectContainerTodoWrap = document.querySelector('.project-container-todo-wrap')
  while (projectContainerTodoWrap.firstChild) {
    projectContainerTodoWrap.removeChild(projectContainerTodoWrap.firstChild)
  }
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
    projectContainerTodoWrap.appendChild(todoContainer)
  })
}

const addTodo = (project) => {
  const title = prompt('todo title?')
  const descrip = prompt('todo description?')
  const priority = prompt('priority? 1-9, with 9 being the highest')
  console.log(project)
  project.addTodo(title, descrip, priority)
  renderTodos(project)
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
  const projectContainerTodoWrap = document.createElement('div')
  projectContainerTodoWrap.classList.add('project-container-todo-wrap')
  projectContainer.appendChild(projectContainerTodoWrap)
  renderTodos(project)
  const addTodoButton = document.createElement('button')
  addTodoButton.classList.add('add-todo-btn')
  addTodoButton.textContent = '+ task'
  addTodoButton.addEventListener('click', () => addTodo(project))
  projectContainer.appendChild(addTodoButton)
}

const renderNav = (workspace) => {
  if (document.querySelector('.nav-bar') == null) {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')
    const navBarTabWrap = document.createElement('div')
    navBarTabWrap.classList.add('nav-bar-tab-wrap')
    navBar.appendChild(navBarTabWrap)
    const desk = document.querySelector('.desk-container')
    desk.appendChild(navBar)
  }
  const navBarTabWrap = document.querySelector('.nav-bar-tab-wrap')
  while (navBarTabWrap.firstChild) {
    navBarTabWrap.removeChild(navBarTabWrap.firstChild)
  }
  const projectArray = Object.values(workspace.projects)
  projectArray.forEach((value) => {
    const tab = document.createElement('div')
    tab.classList.add('project-tab')
    tab.textContent = value.projectTitle
    tab.addEventListener('click', () => renderProject(value))
    navBarTabWrap.appendChild(tab)
  })
  if (document.querySelector('.add-project-btn') == null) {
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-btn')
    addProjectButton.textContent = '+ project'
    const navBar = document.querySelector('.nav-bar')
    navBar.appendChild(addProjectButton)
  }
}

const plusProject = (workspace) => {
  const title = prompt('enter project name')
  if (title == null) return
  workspace.addProject(title)
  renderNav(workspace)
  renderProject(workspace.projects[title])
}

export {
  plusProject,
  renderProject,
  renderDeskContainer,
  renderNav,
  renderTodos,
}
