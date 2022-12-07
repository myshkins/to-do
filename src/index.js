import './style.css'
import {
  addProjectFieldTab,
  renderProject,
  renderDeskContainer,
  renderNav,
  plusProject,
} from './dom'
import { workspace } from './projects'

const desk = workspace('Desk')
desk.addProject('main')
desk.projects.main.addTodo('hello', 'This is a sample', 5)
renderDeskContainer('Desk')

renderNav(desk, desk.projects.main.projectTitle)
renderProject(desk.projects.main)

const addProjectButtonAnchor = document.querySelector('.add-project-btn a')
addProjectButtonAnchor.addEventListener('click', () => { addProjectFieldTab(desk) })
const mainTab = document.querySelector('.nav-bar-tab-wrap').firstChild
mainTab.classList.add('active')
