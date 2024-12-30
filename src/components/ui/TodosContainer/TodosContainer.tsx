import { useState } from "react";
import TaskForm from "../../../forms/TaskForm";
import TaskCard from "../../TasksCard";
import EditTaskForm from "../../../forms/EditTaskForm";

const TodosContainer = () => {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  type Todo = {
    id: number,
    details: string,
    completed: boolean,
    isEditing: boolean
  }

  const addTodo = todo => {
    setTodoList([
      ...todoList,
      {
        id: Math.floor(Math.random()* 100),
        details: todo,
        completed: false,
        isEditing: false
      }
    ])
  }

  const greeting = import.meta.env.VITE_GREETING;

  const deleteTodo = id => {
    setTodoList(todoList.filter(task => task.id !== id))
  }

  return (
    <section>
      <TaskForm addTodo={addTodo} />
      <h1>List of Tasks Todo:</h1>
      <p>{greeting}</p>
      {todoList.map((task) => (
        <TaskCard task={task} key={task.id} deleteTodo={deleteTodo} />
      ))}
    </section>
  )
}

export default TodosContainer