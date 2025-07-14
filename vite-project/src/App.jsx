import React,{useState, useEffect} from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from './assets/directhit.jpg';
import inprogressIcon from './assets/glowingstar.jpg';
import doneIcon from './assets/checkmark.jpg';

const oldTasks= localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks , setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

 const handleDelete = (taskIndex) => {
 const newTasks =  tasks.filter((task, index) => index !== taskIndex);
 setTasks(newTasks);
 };
  return (
    <div className='app'>
      <TaskForm setTasks = {setTasks}/>
      <main className='app_main'>
         <TaskColumn  title ="TODO" icon={todoIcon} tasks={tasks} status= "todo" handleDelete={handleDelete}/>
         <TaskColumn title ="IN PROGRESS" icon={inprogressIcon} tasks={tasks} status= "in progress"  handleDelete={handleDelete}/>
         <TaskColumn title ="DONE" icon={doneIcon} tasks={tasks} status= "done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;
