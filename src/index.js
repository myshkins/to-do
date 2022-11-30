import controller from './controller'
import { defaultRenderProject, defaultRenderTodo, renderDeskContainer } from './dom'

const cntrl = controller()
const desk = cntrl.createWorkspace()
const mainProject = cntrl.createProject('main')
const helloTodo = cntrl.createTodo('hello', 'This is a sample', 4)

mainProject.todoArray.push(helloTodo)
desk.projectArray.push(mainProject)

renderDeskContainer('Desk')
defaultRenderProject(mainProject)
defaultRenderTodo(mainProject)
