import './style.css'
import {
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
renderNav(desk)
const addProjectButtonAnchor = document.querySelector('.add-project-btn a')
addProjectButtonAnchor.addEventListener('click', () => { plusProject(desk) })
renderProject(desk.projects.main)
renderNav(desk)
const mainTab = document.querySelector('.nav-bar-tab-wrap').firstChild
// const mainTab = navBarTabWrap.firstChild
mainTab.classList.add('active')
