import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setToDoCompleted,
    deleteAllCompletedTodos,
    deleteTodo
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-3">
      <h1 className="font-bold text-3xl text-center"> Your Todos </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setToDoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
}

export default App;
