import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <h1 className="text-3xl p-5 font-bold text-left">Smarter Tasks</h1>
      <p className="text-2xl p-6 font-semibold">
        Project: Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="flex justify-around mb-4">
        <div>
          <div className="border border-2 border-gray-300 p-6 rounded-2xl">
            <h3 className="text-2xl mb-4 font-bold">Pending</h3>
            <TaskCard
              title="Build the website with static content"
              dueDate="10th April"
              name="Rohith S"
            />
            <TaskCard title="Add a blog" dueDate="22nd March" name="Rohith M" />
            <p className="text-gray-500 h-7 bg-gray-300 mt-4 text-black p-0.5 pl-2 cursor-pointer text-left ">
              + New Task
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="border border-2 border-gray-300 p-6 rounded-2xl">
              <h3 className="text-2xl mb-4 font-bold">Done</h3>
              <TaskCard title="Design a mockup" completedOn="10th April" name="Rohith M" />
              <TaskCard
                title="Get the aprroval from principal"
                completedOn="20th April"
                name="Ajay S"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
