import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }
//   addTask = (task: TaskItem) => {
//     this.setState((state) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="container py-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
//         <h1 className="text-lg mb-6 text-slate-600">
//           <span className="font-bold">Project: </span>
//           Graduation Final Year Project (Revamp college website)
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="border border-slate-200 rounded-xl p-4">
//             <h1 className="text-slate-500 text-xl font-bold text-center mb-2">Pending</h1>
//             <TaskForm addTask={this.addTask} />
//             <TaskList tasks={this.state.tasks} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", { tasks: [] });
  const addTask = (task: TaskItem) => {
    setTaskAppState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };

  const removeTask = (index: number) => {
    setTaskAppState((state) => {
      const newTasks = [...state.tasks];
      newTasks.splice(index, 1);
      return {
        tasks: newTasks,
      };
    });
  };

  //not require for cleanup function
  useEffect(() => {
    // document.title = `You have ${taskAppState.tasks.length} items`;
    const id = setTimeout(() => {
      console.log(`You have ${taskAppState.tasks.length} items`);
    }, 5000);

    return () => {
      console.log("clear or cencel the exisiting network request");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);
  //require for cleanup function
  // eg. when user name enter in the form then type a req to the a then after a type r then req to the ar and cleanup the previous req
  useEffect(() => {
    //subscribe or connect the service here
    // ...

    return () => {
      // do any clean up code here
      // unsubscribe or disconnect the service here
    };
  });

  //comman example of useEffect
  // React.useEffect(() => {
  //   // This is correct usage
  //   const saveTasks = async () => {
  //     const token = await saveTasksToBackend(taskAppState.tasks);
  //   };
  //   saveTasks();
  //   return () => {
  //     cancelAPI(token);
  //   };
  // }, [taskAppState.tasks]);
  return (
    <div className="container py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">Pending</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} deleteTask={removeTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
