import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from './components/navBar';
import Important from './components/important';
import TaskInfo from './components/taskinfo';
import { useState } from 'react';
import Task from "./components/task";

function App() {
  const[tasks,setTasks] = useState([]);
  
  const onSave = (task) => {
    setTasks([...tasks,task]);//create a copy,add the new element and set it back
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      
      <div className="main">
        <section className="section-list">
          {tasks.map((task) => (<Task task={task}/>))}
        </section>

        <section className="section-form">
          <TaskInfo onSave={onSave}></TaskInfo>
        </section>

      </div>
    </div>
  );
}

export default App;
