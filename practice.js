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
  
function SayHi(){
  console.log('Hi');
}


const thelist=document.querySelector('.list');



function RenderTheList(){
  thelist.innerHTML='';
  for (let i = 0; i < 5; i++) {
    const newbar = document.createElement('div');
    newbar.classList.add('bar');

    const newbut = document.createElement('button');
    newbut.onclick = function() {
      todos[i].done = !todos[i].done;
      RenderTheList();
    } 

    const newtodo = document.createElement('p');

    if (todos[i].done) {
      newbut.classList.add('YDone');

      newtodo.classList.add('Ything');
    }
    else {
      newbut.classList.add('NDone');

      newtodo.classList.add('Nthing');

    }
    newtodo.append(todos[i].name);

    newbar.append(newbut, newtodo);

    console.log(newbar);

    thelist.append(newbar);

  }
}

function Addnewtodo(){
  const inputbar=document.querySelector('.input');
  todos.unshift(
    {
      name : inputbar.value,
      done : false,
    },
  )

  RenderTheList();
  inputbar.value='';
}

RenderTheList();