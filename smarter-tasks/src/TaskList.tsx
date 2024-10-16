import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (id: number) => void;
}
// class TaskList extends React.Component<Props> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <div key={idx}>
//         <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />
//       </div>
//     ));
//   }
// }

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={task.id}
      title={task.title}
      dueDate={task.dueDate}
      description={task.description}
      removeTask={props.deleteTask}
    />
  ));
  return <>{list}</>;
};
export default TaskList;
