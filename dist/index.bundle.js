/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const controller = () => {
  const createWorkspace = (title) => {
    const newWorkspace = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.workspace)(title)
    return newWorkspace
  }

  const createProject = (title) => {
    const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.project)(title)
    return newProject
  }

  const createTodo = (title, description, priority) => {
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, priority)
    return newTodo
  }

  return {
    createWorkspace,
    createProject,
    createTodo,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRenderProject": () => (/* binding */ defaultRenderProject),
/* harmony export */   "defaultRenderTodo": () => (/* binding */ defaultRenderTodo),
/* harmony export */   "renderDeskContainer": () => (/* binding */ renderDeskContainer),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos)
/* harmony export */ });
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




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "workspace": () => (/* binding */ workspace)
/* harmony export */ });
const workspace = (title) => {
  const workspaceTitle = title
  const projectArray = []

  return {
    workspaceTitle,
    projectArray,
  }
}

const project = (title) => {
  const projectTitle = title
  const todoArray = []

  return {
    projectTitle,
    todoArray,
  }
}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todo = (title, description, priority) => {
  const todoTitle = title;
  const todoDesc = description;
  const todoPriority = priority;

  return {
    todoTitle, todoDesc, todoPriority,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const cntrl = (0,_controller__WEBPACK_IMPORTED_MODULE_0__["default"])()
const desk = cntrl.createWorkspace()
const mainProject = cntrl.createProject('main')
const helloTodo = cntrl.createTodo('hello', 'This is a sample', 4)

mainProject.todoArray.push(helloTodo)
desk.projectArray.push(mainProject)

;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderDeskContainer)('Desk')
;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.defaultRenderProject)(mainProject)
;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.defaultRenderTodo)(mainProject)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0I7O0FBRS9DO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBTztBQUM5QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFJO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCekI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRCxHQUFHO0FBQ0g7O0FBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0M7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7O1VDVm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQytDOztBQUVwRixjQUFjLHVEQUFVO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBEQUFtQjtBQUNuQiwyREFBb0I7QUFDcEIsd0RBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcbmltcG9ydCB7IHByb2plY3QsIHdvcmtzcGFjZSB9IGZyb20gJy4vcHJvamVjdHMnXG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IG5ld1dvcmtzcGFjZSA9IHdvcmtzcGFjZSh0aXRsZSlcbiAgICByZXR1cm4gbmV3V29ya3NwYWNlXG4gIH1cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUpXG4gICAgcmV0dXJuIG5ld1Byb2plY3RcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpXG4gICAgcmV0dXJuIG5ld1RvZG9cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlV29ya3NwYWNlLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVG9kbyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyXG4iLCJjb25zdCByZW5kZXJEZXNrQ29udGFpbmVyID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGRlc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkZXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2stY29udGFpbmVyJylcbiAgZGVza0NvbnRhaW5lci5pZCA9IGBkZXNrLWNvbnRhaW5lci0ke3RpdGxlfWBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXNrQ29udGFpbmVyKVxufVxuXG5jb25zdCBkZWZhdWx0UmVuZGVyUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJylcbiAgcHJvamVjdENvbnRhaW5lci5pZCA9IGBwcm9qZWN0LWNvbnRhaW5lci0ke3Byb2plY3QucHJvamVjdFRpdGxlfWBcbiAgY29uc3QgZGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrLWNvbnRhaW5lcicpXG4gIGRlc2suYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbn1cblxuLy8gY29uc3QgcmVuZGVyRGVza05hdiA9ICgpID0+IHtcblxuLy8gfVxuXG5jb25zdCBkZWZhdWx0UmVuZGVyVG9kbyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXItbWFpbicpXG4gIHByb2plY3QudG9kb0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJylcbiAgICB0b2RvQ29udGFpbmVyLmlkID0gYHRvZG8tY29udGFpbmVyLSR7ZWxlbWVudC50b2RvVGl0bGV9YFxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKVxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudG9kb1RpdGxlXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpXG4gICAgY29uc3QgdG9kb0Rlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9EZXNjcmlwLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcCcpXG4gICAgdG9kb0Rlc2NyaXAudGV4dENvbnRlbnQgPSBlbGVtZW50LnRvZG9EZXNjcmlwXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcClcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG4gIH0pXG59XG5cbmNvbnN0IHJlbmRlclRvZG9zID0gKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZS50YXJnZXQuaWRcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RUaXRsZSlcbiAgcHJvamVjdC50b2RvQXJyYXkuYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKVxuICAgIHRvZG9Db250YWluZXIuaWQgPSBgdG9kby1jb250YWluZXIgJHtlbGVtZW50LnRvZG9UaXRsZX1gXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHRSZW5kZXJQcm9qZWN0LFxuICBkZWZhdWx0UmVuZGVyVG9kbyxcbiAgcmVuZGVyRGVza0NvbnRhaW5lcixcbiAgcmVuZGVyVG9kb3MsXG59XG4iLCJjb25zdCB3b3Jrc3BhY2UgPSAodGl0bGUpID0+IHtcbiAgY29uc3Qgd29ya3NwYWNlVGl0bGUgPSB0aXRsZVxuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXVxuXG4gIHJldHVybiB7XG4gICAgd29ya3NwYWNlVGl0bGUsXG4gICAgcHJvamVjdEFycmF5LFxuICB9XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gdGl0bGVcbiAgY29uc3QgdG9kb0FycmF5ID0gW11cblxuICByZXR1cm4ge1xuICAgIHByb2plY3RUaXRsZSxcbiAgICB0b2RvQXJyYXksXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcHJvamVjdCxcbiAgd29ya3NwYWNlLFxufVxuIiwiY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IHRpdGxlO1xuICBjb25zdCB0b2RvRGVzYyA9IGRlc2NyaXB0aW9uO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9UaXRsZSwgdG9kb0Rlc2MsIHRvZG9Qcmlvcml0eSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcidcbmltcG9ydCB7IGRlZmF1bHRSZW5kZXJQcm9qZWN0LCBkZWZhdWx0UmVuZGVyVG9kbywgcmVuZGVyRGVza0NvbnRhaW5lciB9IGZyb20gJy4vZG9tJ1xuXG5jb25zdCBjbnRybCA9IGNvbnRyb2xsZXIoKVxuY29uc3QgZGVzayA9IGNudHJsLmNyZWF0ZVdvcmtzcGFjZSgpXG5jb25zdCBtYWluUHJvamVjdCA9IGNudHJsLmNyZWF0ZVByb2plY3QoJ21haW4nKVxuY29uc3QgaGVsbG9Ub2RvID0gY250cmwuY3JlYXRlVG9kbygnaGVsbG8nLCAnVGhpcyBpcyBhIHNhbXBsZScsIDQpXG5cbm1haW5Qcm9qZWN0LnRvZG9BcnJheS5wdXNoKGhlbGxvVG9kbylcbmRlc2sucHJvamVjdEFycmF5LnB1c2gobWFpblByb2plY3QpXG5cbnJlbmRlckRlc2tDb250YWluZXIoJ0Rlc2snKVxuZGVmYXVsdFJlbmRlclByb2plY3QobWFpblByb2plY3QpXG5kZWZhdWx0UmVuZGVyVG9kbyhtYWluUHJvamVjdClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==