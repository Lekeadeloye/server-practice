import { Todo } from "./ui/TodosContainer/TodosContainer";

type TaskCardProps = {
  task: Todo;
  deleteTodo: (id: number) => void;
};

const TaskCard = ({ task, deleteTodo }: TaskCardProps) => {
  return (
    <>
      <section>
        <li>
          {task.details}
          <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </li>
      </section>
    </>
  );
};

export default TaskCard;
