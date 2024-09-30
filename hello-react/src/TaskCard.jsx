import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="TaskItem border-2">
      <h2 className="text-xl font-bold">Assignee : {props.title}</h2>
      {props.dueDate && <p>DueDate : {props.dueDate}</p>}
      {props.completedOn && <p>Completed on : {props.completedOn}</p>}
      <p>Assignee: {props.name}</p>
    </div>
  );
};
export default TaskCard;
