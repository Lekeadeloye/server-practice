import TaskForm from "../../forms/TaskForm"
import TodosContainer from "../../components/ui/TodosContainer/TodosContainer"

const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-2xl mt-16">Things To Get Done</h1>
      <TodosContainer/>
    </>
  )
}

export default HomePage