import React from "react";
import { TaskItem } from "./types";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}
// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       dueDate: "",
//       description: "",
//     };
//   }
//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const { title, dueDate, description } = this.state;
//     if (title && dueDate) {
//       const newTask: TaskItem = {
//         title,
//         dueDate,
//         description,
//       };
//       this.props.addTask(newTask);
//       this.setState({ title: "", dueDate: "", description: "" });
//     }
//     if (!title || !dueDate) {
//       alert("Title and Due Date are required.");
//     }
//   };
//   handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value } as Pick<TaskFormState, keyof TaskFormState>);
//   };
//   //   inputRef = React.createRef<HTMLInputElement>();
//   render() {
//     return (
//       <form onSubmit={this.addTask}>
//         <div className="flex flex-col m-2">
//           <input
//             type="text"
//             id="todoTitle"
//             name="title"
//             value={this.state.title}
//             onChange={this.handleChange}
//             placeholder="Title"
//             className="border-2 p-2 m-3 rounded"
//             required
//           />
//           <input
//             type="date"
//             id="todoDueDate"
//             name="dueDate"
//             value={this.state.dueDate}
//             onChange={this.handleChange}
//             placeholder="Due Date"
//             className="border-2 p-2 m-3 rounded"
//             required
//           />
//           <input
//             type="text"
//             id="todoDescription"
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//             placeholder="Description"
//             className="border-2 p-2 m-3 rounded"
//           />
//           <button
//             type="submit"
//             id="addTaskButton"
//             className="mt-2 bg-green-600 m-2 text-white rounded p-1">
//             Add Task
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

const TaskForm = (props: TaskFormProps) => {
  const [FormState, setFormState] = React.useState<TaskFormState>({
    title: "",
    dueDate: "",
    description: "",
  });

  const titleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    setFormState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const descriptionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    setFormState((prevState) => {
      return { ...prevState, description: event.target.value };
    });
  };
  const dueDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.target.value}`);
    setFormState((prevState) => {
      return { ...prevState, dueDate: event.target.value };
    });
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted");
    const { title, dueDate, description } = FormState;
    if (title && dueDate) {
      const newTask: TaskItem = {
        id: uuidv4(),
        title,
        dueDate,
        description,
      };
      props.addTask(newTask);
      setFormState({ title: "", dueDate: "", description: "" });
    }
    if (!title || !dueDate) {
      alert("Title and Due Date are required.");
    }
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="todoTitle"
              name="todoTitle"
              type="text"
              value={FormState.title}
              onChange={titleChanged}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="todoTitle"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Todo Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="todoDescription"
              name="todoDescription"
              type="text"
              value={FormState.description}
              onChange={descriptionChanged}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="todoDescription"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="todoDueDate"
              name="todoDueDate"
              type="date"
              value={FormState.dueDate}
              onChange={dueDateChanged}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="todoDueDate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Due Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <button
              type="submit"
              id="addTaskButton"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add item
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
