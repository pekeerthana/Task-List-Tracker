import Axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function getAllTasks() {
  return Axios.get(apiUrl)
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching tasks:", err);
      return Promise.reject(err);
    });
}

function createTask(newTask){
  console.log("calling new task api");
  console.log(newTask);
  return Axios.post(apiUrl,newTask)
      .then(res=> res.data)
      .catch(err=>{
        console.log("Error creating new task:",err);
        return Promise.reject(err);
      });
}

function deleteTask(id){
  console.log('delete task of id', id);
  console.log(apiUrl+"/"+id);
  return Axios.delete(apiUrl+"/"+id)
      .then(res=>res.data)
      .catch(err=>{
        console.log("Error deleting task:",err);
        return Promise.reject(err);
      })
}

export {getAllTasks,createTask,deleteTask};
