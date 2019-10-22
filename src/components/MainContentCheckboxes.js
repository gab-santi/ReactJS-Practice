import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function MainContentCheckboxes() {
    const checklistData = todosData.map(
        item => <TodoItem key={item.id} completed={item.completed} text={item.text} />
    )

    return (
        <div className="todo-list">
            {checklistData}
        </div>
    )
}

export default MainContentCheckboxes