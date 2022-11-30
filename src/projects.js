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

export {
  project,
  workspace,
}
