import React, { Component } from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class MainContentCheckboxes extends Component {
    render() {
        const checklistData = todosData.map(
            item => <TodoItem key={item.id} completed={item.completed} text={item.text} />
        )
    
        return (
            <div className="todo-list">
                {checklistData}
            </div>
        )
    }
}

export default MainContentCheckboxes