import notepadIcon from '/src/assets/notepad-icon.png'

export function Header(props) {
    const {todos} = props
    const todosLength = todos.filter(val => !val.complete).length

    const isTasksPlural = todos.filter(val => !val.complete).length != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

    return (
        <header>
            <img src={notepadIcon} width="25px" height="30px"/>
            <h1>You have {todosLength} unfinished {taskOrTasks}</h1>
        </header>
    )
}