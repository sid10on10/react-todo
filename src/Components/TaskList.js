import React,{Fragment} from "react"
import TaskItem from "./TaskItem"

const TaskList = (props) => {
    const taskItems = props.tasks.map((task, i) =>
        { return (<TaskItem
            task={task}
            key={i}
            changeStatus={(id) => props.changeStatus(id)}
            changePriority={(id, priorityLevel) =>
              props.changePriority(id, priorityLevel)
            }
            deleteTask={(id) => props.deleteTask(id)}
          />)
        }
    )
    return (
        <div>
            {taskItems}
        </div>
    )
}

export default TaskList