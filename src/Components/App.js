import React, {useState} from "react"
import data from "../data"
import Header from "./Header"
import StatusBar from "./StatusBar"
import TaskList from "./TaskList"
import AddTask from "./AddTask"

const App = () => {
    const [tasks,setTasks] = useState(data)
    const [ID, setID] = useState(100)

    const changeStatusOfTask = (id) => {
        const newTasks = tasks.map((task)=>{
            if(task.id==id){
                return {
                    ...task,
                    isComplete: !task.isComplete,
                }
            }else{
                return task
            }
        })
        setTasks(newTasks)
    }

    const changePriorityOfTask = (id,priorityLevel) => {
        const newTasks = tasks.map((task)=>{
            if(task.id==id){
                return {
                    ...task,
                    priorityLevel,
                }
            }else{
                return task
            }
        })
        setTasks(newTasks)
    }

    const deleteOneTask = (id) => {
        const newTasks = tasks.filter((task) => task.id != id)
        setTasks(newTasks)
    }

    const addOneTask = (task) => {
        const checkerTask = tasks.find(
          (item) => item.priorityLevel == task.priorityLevel
        )
        if (checkerTask.shouldRender) {
          task.shouldRender = true
        } else {
          task.shouldRender = false
        }
        const newTasks = [
          ...tasks,
          {
            ...task,
            isComplete: false,
            id: ID,
          },
        ]
        setID(ID + 1)
        setTasks(newTasks)
      }

    return (
        <div className="bg-info min-vh-100">
            <Header/>
            <StatusBar tasks={tasks}/>
            <div className="container-fluid">
                <TaskList
                    tasks={tasks}
                    changeStatus={(id) => changeStatusOfTask(id)}
                    changePriority={(id, priorityLevel) =>
                        changePriorityOfTask(id, priorityLevel)
                    }
                    deleteTask={(id) => deleteOneTask(id)}
                />  
                <AddTask addTask={(task) => addOneTask(task)} />       
            </div>
        </div>
    )
}

export default App;