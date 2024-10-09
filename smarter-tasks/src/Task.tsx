import "./TaskCard.css";
import { TaskItem } from "./types";
// ...

interface TaskProps extends TaskItem {
  onDelete: (id: number) => void;
  id: number;
}

// class Task extends React.Component<TaskProps> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2>{this.props.title}</h2>
//         {this.props.dueDate && <p>Due Date: {this.props.dueDate}</p>}
//         {this.props.description && <p>Description: {this.props.description}</p>}
//       </div>
//     );
//   }
// }

const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2>{props.title}</h2>
      {props.dueDate && <p>Due Date: {props.dueDate}</p>}
      {props.description && <p>Description: {props.description}</p>}
      <button className="deleteTaskButton" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
