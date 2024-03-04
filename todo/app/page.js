function Todo({todo}){
  return(
    <div className="bar">
      <button className={`${todo.done ? "YDone" : "NDone"}`}></button>
      <div className={`${todo.done ? "Ything" : "Nthing"}`}>

        {todo.name}

      </div>
    </div>
  )
}

export default function Home() {

  const todos = [
    {
      name: "Calculus HW2",
      done: false,
    },
    {
      name: "Side Project Figma",
      done: false,
    },
    {
      name: "Course Slide",
      done: false,
    },
    {
      name: "Write Blog Post",
      done: true,
    },
    {
      name: "Test",
      done: true,
    },
  ];

  return (
    <div className="blackground">
      <p ID="todo">TODO</p>
      <div className="inputbar">
        <button className="Plus" ><p className="PP">+</p></button>
        <input type="text" placeholder="Create a new todo ..." className="input" />

      </div>

      <div className="list">

        {todos.map((todo) =>(
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}