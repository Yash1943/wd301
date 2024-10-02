import "./TaskCard.css";
import React from "react";
import { TaskItem } from "./types";
// ...

interface TaskProps extends TaskItem {}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        {this.props.dueDate && (
          <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
        )}
        {this.props.description && (
          <p className="text-sm text-slate-500">Description: {this.props.description}</p>
        )}
      </div>
    );
  }
}

export default Task;
