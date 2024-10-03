import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<TaskFormState, keyof TaskFormState>);
  };
  //   inputRef = React.createRef<HTMLInputElement>();
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="flex flex-col m-2">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
            className="border-2 p-2 m-3 rounded"
          />
          <input
            type="text"
            name="dueDate"
            value={this.state.dueDate}
            onChange={this.handleChange}
            placeholder="Due Date"
            className="border-2 p-2 m-3 rounded"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
            className="border-2 p-2 m-3 rounded"
          />
          <button className="bg-green-600 p-2 m-3 rounded text-white" type="submit">
            Add item
          </button>
        </div>
      </form>
    );
  }
}
export default TaskForm;
