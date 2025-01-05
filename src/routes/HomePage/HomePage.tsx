import TaskForm from "../../forms/TaskForm";
import TodosContainer from "../../components/ui/TodosContainer/TodosContainer";

const HomePage = () => {
  return (
    <>
      <section className="flex justify-center">
        <TodosContainer />
      </section>
    </>
  );
};

export default HomePage;
