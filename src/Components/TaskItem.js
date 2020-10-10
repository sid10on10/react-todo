import React from "react"

const TaskItem = (props) => {
  return (
    <div className="row justify-content-center align-items-center mt-3">
      <div className="col-1">
        <input
          type="checkbox"
          className="form-control big-checkbox mx-3"
          checked={props.task.isComplete}
          onChange={() => {
            props.changeStatus(props.task.id)
          }}
        />
      </div>
      <div className="col-3 col-md-5 text-center">
        <h5>{props.task.name}</h5>
      </div>
      <div className="col-1 col-sm-2">
        <select
          className="form-control select-box mx-3"
          value={props.task.priorityLevel}
          onChange={(e) => {
            props.changePriority(props.task.id, e.target.value)
          }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="col-1 mx-5 mx-md-2">
        <button
          onClick={() => {
            props.deleteTask(props.task.id)
          }}
          className="btn btn-dark text-danger"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
