

const TaskCard = ({task, deleteTodo}) => {
  return (
    <>
      <section className="flex">
        <p>{task.details}</p>
        <div>
          <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
      </section>
    </>
  )
}

export default TaskCard