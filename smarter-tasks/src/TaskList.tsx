import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
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
    <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />
  ));
  return <>{list}</>;
};
export default TaskList;
