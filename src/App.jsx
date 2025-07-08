import './App.css';
import ToDoItem from './components/ToDoItem.jsx';
import { addToDo as addTodoService} from './services/todoService.js';
import { useState, useEffect } from 'react';

function App() {
  const [newToDoText, setNewToDoText] = useState('');

  //Initialize todos state (load from local storage)
  const [todos, setTodos] = useState(() => {
    const savedToDos = localStorage.getItem('todos');
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  //to save todos in local storage
  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos));
    console.log("ToDos save to local Storage.........");
  }, [todos]);


  const handleAddToDo = () => {
    const newTodoItem = addTodoService(newToDoText); 
    if (newTodoItem) {
      setTodos([...todos, newTodoItem]); 
      setNewToDoText(''); 
      console.log("New To Do Added:", newTodoItem); 
    }
  };

  return (
    <div className='app'>
      <h1 className='main-heading'> Simple To Do App </h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <input type="text" placeholder='What do you want to do ?' value={newToDoText} onChange={(e) => setNewToDoText(e.target.value)}/>
          <button type='submit' className='btn-add-task' onClick={handleAddToDo}> Add </button>
        </div>
        {/* <div className='todo-list-btns'>
          <button type='' className='btn-todo-task'> To Do Tasks  </button>
          <button type='' className='btn-completed-task'> Completed Tasks </button>
        </div> */}
        <div className='all-todos'>
          {
            todos.length > 0 ? (
              todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
              ))  
            ) : (
              <p> No Tasks yet! Add something to do....</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App