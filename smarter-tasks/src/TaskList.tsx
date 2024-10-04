import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}
class TaskList extends React.Component<Props> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <div key={idx} className="TaskItem">
        <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />
      </div>
    ));
  }
}
export default TaskList;
