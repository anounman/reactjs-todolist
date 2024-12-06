export default function TodoInput(props) {
  const { inputList, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        value={todoValue}
        placeholder="Enter todo...."
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          inputList(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
