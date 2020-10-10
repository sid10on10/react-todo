import React from "react"
import StatusBarItem from "./StatusBarItem"

const StatusBar = (props) => {
    const tasks = props.tasks
    const noOfPendingTasks = tasks.filter((task)=>task.isComplete==false).length
    const noOfCompletedTasks = tasks.filter((task)=>task.isComplete==true).length
    const noOfHighPriorityTasks = tasks.filter((task)=>task.priorityLevel=="high").length
    const noOfMediumPriorityTasks = tasks.filter((task)=>task.priorityLevel=="medium").length
    const noOfLowPriorityTasks = tasks.filter((task)=>task.priorityLevel=="low").length

    return (
        <div className="text-center bg-warning">
            <h3>DASHBOARD</h3>
            <div className="row bg-info">
                <StatusBarItem text="Pending" number={noOfPendingTasks}/>
                <StatusBarItem text="Completed" number={noOfCompletedTasks}/>
                <StatusBarItem text="Low" number={noOfLowPriorityTasks} />
                <StatusBarItem text="Medium" number={noOfMediumPriorityTasks} />
                <StatusBarItem text="High" number={noOfHighPriorityTasks} />
            </div>
        </div>
    )
}

export default StatusBar;
