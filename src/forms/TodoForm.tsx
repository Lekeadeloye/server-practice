import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  toDo: z.string().nonempty(),
  firstName: z.string().nonempty(),
});

type Inputs = z.infer<typeof schema>;

// type Inputs = {
//   firstName: string;
//   exampleRequired: string;
//   toDo: string;
// };

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      // setError("firstName", {
      //   message: "Name must not contain numbers",
      // });
      setError('root', {
        message: 'There was an error submitting form'
        // This is a test
      })
    }
  };

  // console.log(watch("toDo", 'firstName')); // watch input value by passing the name of it

  return (
    <section className="border w-1/2">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-purple flex flex-col p-7 space-y-2">
        <h1 className="text-center text-2xl">Things To Get Done</h1>
        <label htmlFor="toDo">Task:</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("toDo")}
          placeholder="Enter task"
          className="border-2 border-black ml-2 p-1"
          id="toDo"
          type="text"
        />
        {errors.firstName && (
          <span className="text-red-400">{errors.toDo?.message}</span>
        )}
        <label htmlFor="firstName" className="flex flex-col">
          First Name:
        </label>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("firstName")}
          placeholder="Enter Name"
          id="firstName"
          type="text"
          className="border-2 border-black ml-2 p-1"
        />
        {/* errors will return when field validation fails  */}
        {errors.firstName && (
          <span className="text-red-400">{errors.firstName.message}</span>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green text-gray-light rounded w-14 p-1">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        <button
          type="button"
          className="bg-green text-gray-light rounded w-14 p-1"
          onClick={() => reset()}>
          Reset
        </button>
        {errors.root && (
          <span className="text-red-400">{errors.root.message}</span>
        )}
      </form>
    </section>
  );
};

export default TodoForm;
