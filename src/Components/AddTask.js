import React, { useState } from "react"

const AddTask = (props) => {
  const [taskName, setTaskName] = useState("")
  const [priorityLevel, setPriorityLevel] = useState("low")
  return (
    <div className="d-flex align-items-center justify-content-center py-3">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="form-control w-25 mx-3"
      />
      <select
        value={priorityLevel}
        onChange={(e) => {
          setPriorityLevel(e.target.value)
        }}
        className="select-box form-control mx-3"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        onClick={() => {
          props.addTask({ name: taskName, priorityLevel })
          setTaskName("")
          setPriorityLevel("low")
        }}
        className="btn btn-primary text-white"
      >
        Add
      </button>
    </div>
  )
}

export default AddTask
