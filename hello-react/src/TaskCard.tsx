import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
  console.log(props);
  return (
    <div className="TaskItem border-2">
      <h2 className="text-xl font-bold">Assignee : {props.title}</h2>
      {props.dueDate && <p>DueDate : {props.dueDate}</p>}
      {props.completedAtDate && <p>Completed on : {props.completedAtDate}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};
export default TaskCard;
