import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedOn?: string;
  name: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
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
