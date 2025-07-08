import './App.css';
import ToDoItem from './components/ToDoItem.jsx';
import { createNewToDo, deleteToDo, completedToDo, saveToDosToStorage, loadToDosFromStorage} from './services/todoService.js';
import { useState, useEffect } from 'react';

function App() {
  const [newToDoText, setNewToDoText] = useState('');

  //Initialize todos state 
  const [todos, setTodos] = useState(() => {
    return loadToDosFromStorage();
  });

  // To track items
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    saveToDosToStorage(todos);
  }, [todos]);

  const handleAddItem = () => {
    const newTodoItem = createNewToDo(newToDoText); 
    if (newTodoItem) {
      setTodos([...todos, newTodoItem]); 
      setNewToDoText(''); 
      console.log("New To Do Added:", newTodoItem); 
    }
  };

  const handleCompleteItem = (id) => {
    const completeToDoItem = completedToDo(todos, id);
    setTodos(completeToDoItem); 
    console.log("Task is Completed."); 
  };

  const handleDeleteItem = (id) => {
    const updateToDos = deleteToDo(todos, id);
    setTodos(updateToDos); 
    console.log("Task is deleted."); 
  };

  const filterItems = todos.filter(todo => {
    if(filter === 'completed'){
      return todo.completed;
    }

    return true;
  });

  return (
    <div className='app'>
      <h1 className='main-heading'> Simple To Do App </h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <input 
            type="text" 
            placeholder='What do you want to do ?' 
            value={newToDoText} 
            onChange={(e) => setNewToDoText(e.target.value)}
          />
          <button type='submit' className='btn-add-task' onClick={handleAddItem}> Add </button>
        </div>
        <div className='todo-list-btns'>
          <button 
            type='button' 
            className={`btn-todo-task ${filter === 'all' ? 'active-filter' : ''}`}
            onClick={() => setFilter('all')}
          > 
            All Tasks  
          </button>
          <button 
            type='button' 
            className={`btn-completed-task ${filter === 'completed' ? 'active-filter' : ''}`}
            onClick={() => setFilter('completed')}
          > 
            Completed Tasks  
          </button>
        </div>
        <h2 className='section-name'> {filter === 'all' ? 'All tasks' : 'Completed Tasks'} </h2>
        <div className='all-todos'>
          {
            filterItems.length > 0 ? (
              filterItems.map((todo) => (
                <ToDoItem 
                  key={todo.id} 
                  todo={todo} 
                  onDelete={handleDeleteItem} 
                  onComplete ={handleCompleteItem}
                />
              ))  
            ) : (
              <p> {filter === 'all' ? 'No Tasks yet! Add something to do....' : 'No completed tasks....'} </p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App