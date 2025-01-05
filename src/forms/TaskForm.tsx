import { useState } from "react";

const TaskForm = ({addTodo}) => {

  const [task, setTask] = useState('');

  const onHandleChangeTask = ({target}) => {
    setTask(target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      return
    }

    addTodo(task);

    setTask('')

  }

  return (
    <>
      <section className="flex justify-self-center">
        <form onSubmit={onHandleSubmit} className="flex gap-2 items-center">
          <label className='' htmlFor="toDo">Task:
            <input 
              className="border-2 border-black ml-2 p-1"
              id='toDo'
              type="text" 
              placeholder="Enter Task"
              onChange={onHandleChangeTask}
              name='task'
              value={task}/>
          </label>
          <button type='submit' className="bg-green-400 text-white rounded w-14 p-1">Add Task</button>
        </form>
      </section>
    </>
  )
}

export default TaskForm