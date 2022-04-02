import React from "react";
import MainHeading from "./MainHeading";
import H3 from "./H3";
import TodoRow from "./TodoRow";
import Button from "./Button";
import TodoForm from "./TodoForm";

let i = 0;

export default function Content() {
  const [TodoVisible, updateTodoVisible] = React.useState(false);

  const [todoList, setTodoList] = React.useState([]);

  const [doneList, setDoneList] = React.useState([]);

  console.log("todoList", todoList);

  const showTodo = () => {
    updateTodoVisible(true);
  };

  const hideTodo = () => {
    updateTodoVisible(false);
  };

  const addTodo = (todoTitle) => {
    setTodoList([...todoList, { id: i++, title: todoTitle }]);
  };

  const deleteFromTodo = (todo) => {
    const newTodoList = todoList.filter((t) => t.id !== todo.id);
    setTodoList(newTodoList);
  };

  const deleteFromDone = (todo) => {
    const newDoneList = doneList.filter((t) => t.id !== todo.id);
    setDoneList(newDoneList);
  };

  const onDeleteTodo = (todo, done) => {
    if (done) {
      deleteFromDone(todo);
    } else {
      deleteFromTodo(todo);
    }
  };

  const markAsDone = (todo) => {
    deleteFromTodo(todo);

    setDoneList([...doneList, todo]);
  };

  const markAsNotDone = (todo) => {
    deleteFromDone(todo);

    setTodoList([...todoList, todo]);
  };

  return (
    <div className="px-32 py-5">
      <MainHeading>Things to get done</MainHeading>
      <div className="mb-2">
        <H3>Things To Do</H3>
      </div>
      {todoList.map((t) => (
        <TodoRow
          onDelete={onDeleteTodo}
          key={t.id}
          todo={t}
          onStatusChange={markAsDone}
          done={false}
        ></TodoRow>
      ))}

      {!todoList.length && <div>No todo's here</div>}
      <div className="my-3">
        {!TodoVisible && (
          <Button onClick={showTodo} theme="fullRound">
            {" "}
            + Add a todo
          </Button>
        )}
      </div>
      {TodoVisible && <TodoForm onChange={hideTodo} onCreate={addTodo} />}
      <div className="my-2">
        <H3>Things Done</H3>
      </div>
      {doneList.map((t) => (
        <TodoRow
          todo={t}
          onDelete={onDeleteTodo}
          key={t.id}
          onStatusChange={markAsNotDone}
          done={true}
        ></TodoRow>
      ))}
      {!doneList.length && <div>No todo's here</div>}
    </div>
  );
}
