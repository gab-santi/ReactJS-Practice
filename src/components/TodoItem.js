import React, { Component } from "react"

class TodoItem extends Component {
    render(props) {
        return (
            <div className="todo-item">
                <input type="checkbox" defaultChecked={this.props.completed} />        
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoItem
