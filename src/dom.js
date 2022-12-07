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
  if (title == null) return
  const descrip = prompt('todo description?')
  const priority = prompt('priority? 1-9, with 9 being the highest')
  project.addTodo(title, descrip, priority)
  renderTodos(project)
}

function switchActiveTab(projectName) {
  const activeTab = document.querySelector('.active')
  activeTab.classList.remove('active')
  const newActiveTab = document.getElementById(`project-tab-${projectName}`)
  newActiveTab.classList.add('active')
}

const renderProject = (project) => {
  switchActiveTab(project.projectTitle)
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
  addTodoButton.textContent = '+ todo'
  addTodoButton.addEventListener('click', () => addTodo(project))
  projectContainer.appendChild(addTodoButton)
}

function createNavBar() {
  if (document.querySelector('.nav-bar') == null) {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')
    const navBarTabWrap = document.createElement('ul')
    navBarTabWrap.classList.add('nav-bar-tab-wrap', 'group', 'project-tab')
    navBar.appendChild(navBarTabWrap)
    const desk = document.querySelector('.desk-container')
    desk.appendChild(navBar)
  }
}

function createAddProjectBtn() {
  const navBarTabWrap = document.querySelector('.nav-bar-tab-wrap')
  if (document.querySelector('.add-project-btn') == null) {
    const addProjectButton = document.createElement('li')
    addProjectButton.classList.add('project-tab', 'add-project-btn')
    const addProjectButtonAnchor = document.createElement('a')
    addProjectButton.appendChild(addProjectButtonAnchor)
    addProjectButtonAnchor.textContent = '+'
    navBarTabWrap.appendChild(addProjectButton)
  }
}

const renderNav = (workspace, title) => {
  createNavBar()
  const navBarTabWrap = document.querySelector('.nav-bar-tab-wrap')
  while (navBarTabWrap.childNodes.length > 1) {
    navBarTabWrap.removeChild(navBarTabWrap.firstChild)
  }
  const projectArray = Object.values(workspace.projects)
  projectArray.reverse()
  projectArray.forEach((value) => {
    const tab = document.createElement('li')
    tab.classList.add('project-tab')
    tab.id = `project-tab-${value.projectTitle}`
    const tabAnchor = document.createElement('a')
    tab.appendChild(tabAnchor)
    tabAnchor.textContent = value.projectTitle
    tabAnchor.classList.add()
    tabAnchor.addEventListener('click', () => renderProject(value))
    navBarTabWrap.prepend(tab)
  })
  const activeTab = document.getElementById(`project-tab-${title}`)
  activeTab.classList.add('active')
  createAddProjectBtn()
}

const plusProject = (workspace) => {
  const title = prompt('enter project name')
  if (title == null) return
  workspace.addProject(title)
  renderNav(workspace, title)
  renderProject(workspace.projects[title])
}

export {
  plusProject,
  renderProject,
  renderDeskContainer,
  renderNav,
  renderTodos,
}
