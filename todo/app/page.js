'use client';

import { useEffect, useRef, useState } from "react";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pdguvljuizwsqvhymjhd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)



export default function Home() {

  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      let { data: todos, error } = await supabase
        .from('todos')
        .select('*')

        console.log(todos);
        setTodos(todos)
    }
    fetchTodos();
  }, [])

  function Todo({ todo }) {
    return (
      <div className="bar">
        <button className={`${todo.done ? "YDone" : "NDone"}`} onClick={async () => {

          const { data, error } = await supabase
            .from('todos')
            .update({ done: !todo.done})
            .eq('id',todo.id)
            .select()

          console.log(data);

          const newTodos = todos.map((t) => {
            if(t.id == todo.id) {
              return data[0];
            }
            return t
          });
          setTodos(newTodos);
        }}></button>
        <div className={`${todo.done ? "Ything" : "Nthing"}`}>

          {todo.name}

        </div>
      </div>
    )
  }

  return (
    <div className="blackground">
      <p ID="todo">TODO</p>
      <div className="inputbar">
        <button className="Plus" onClick={ async () => {
          
          const { data, error } = await supabase
            .from('todos')
            .insert([
              { name: inputRef.current.value , done: false},
            ])
            .select()

            console.log(data);

          setTodos([data[0], ...todos])
          inputRef.current.value = '';
        }}><p className="PP">+</p>
        </button>
        <input 
        ref={inputRef} 
        type="text" 
        placeholder="Create a new todo ..." 
        className="input" />

      </div>

      <div className="list">

        {todos.map((todo) =>(
          <Todo todo={todo} key={todo.id}/>
        ))}
      </div>
    </div>
  );
}