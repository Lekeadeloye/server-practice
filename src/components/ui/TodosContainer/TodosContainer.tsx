import { useState } from "react";
import TaskForm from "../../../forms/TaskForm";
import TaskCard from "../../TasksCard";
import EditTaskForm from "../../../forms/EditTaskForm";
import TodoForm from "../../../forms/TodoForm";

export type Todo = {
  id: number;
  details: string;
  completed: boolean;
  isEditing: boolean;
};

const TodosContainer = () => {
  const [toDoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodoList([
      ...toDoList,
      {
        id: Math.floor(Math.random() * 100),
        details: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(toDoList);
  };

  const greeting = import.meta.env.VITE_GREETING;

  const deleteTodo = (id: number) => {
    setTodoList(toDoList.filter(task => task.id !== id));
  };

  return (
    <section className="flex flex-col gap-3 w-1/2 p-5">
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
      {/* <h1>List of Tasks Todo:</h1> */}
      {/* <TaskForm addTodo={addTodo} /> */}
      {/* <p>{greeting}</p> */}
      <div className="flex flex-col space-y-7">
        {toDoList.map(task => (
          <TaskCard task={task} key={task.id} deleteTodo={deleteTodo} />
        ))}
      </div>
    </section>
  );
};

export default TodosContainer;
