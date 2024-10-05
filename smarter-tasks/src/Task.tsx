import "./TaskCard.css";
import React from "react";
import { TaskItem } from "./types";
// ...

interface TaskProps extends TaskItem {}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2>{this.props.title}</h2>
        {this.props.dueDate && (
          <p>Due Date: {this.props.dueDate}</p>
        )}
        {this.props.description && (
          <p>Description: {this.props.description}</p>
        )}
      </div>
    );
  }
}

export default Task;
