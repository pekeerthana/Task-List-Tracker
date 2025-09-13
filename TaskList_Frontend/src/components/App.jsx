import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {getAllTasks,createTask,deleteTask} from "../service/NoteService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error,setError] = useState([]);

  function addTask(newTask) {
    console.log("addign new task");
    createTask(newTask).then((data)=>{
      console.log(data);
      setTasks(prevTasks => {
      return [...prevTasks, data];
    });
    })
   
  }

  function deleteTaskById(id) {
    console.log("calling delete task by id",id);
    deleteTask(id).then(data =>{

      getAllTasks().then(data=>{
        setTasks(data);
      })
      .catch(err=>{
        setError(err);
      })
    })
  }

  useEffect(()=>{
    getAllTasks()
    .then((data)=>{
      setTasks(data);
      // setLoading()
    })
    .catch((err)=>{
      setError(err);
    })
  },[]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTask} />
      {tasks.map((task) => {
        return (
          <Note
            key={task.id}
            id={task.id}
            title={task.title}
            note={task.note}
            onDelete={deleteTaskById}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
