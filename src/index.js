import './style.css'
// import controller from './controller'
import {
  renderProject,
  renderDeskContainer,
  renderNav,
} from './dom'
import { workspace } from './projects'

// const cntrl = controller()
const desk = workspace('Desk')
desk.addProject('main')
desk.projects.main.addTodo('hello', 'This is a sample', 5)
// const mainProject = cntrl.createProject('main')
// const helloTodo = cntrl.createTodo('hillo', 'This is a sample', 4)

// mainProject.todoArray.push(helloTodo)
// desk.projectArray.push(mainProject)

renderDeskContainer('Desk')
renderNav(desk)
renderProject(desk.projects.main)
