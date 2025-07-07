import './App.css'

function App() {
  return (
    <div className='app'>
      <h1 className='main-heading'> Simple To Do App </h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <input type="text" placeholder='What do you want to do ?'/>
          <button type='submit' className='btn-add-task'> Add </button>
        </div>
        <div className='todo-list-btns'>
          <button type='' className='btn-todo-task'> To Do Tasks  </button>
          <button type='' className='btn-completed-task'> Completed Tasks </button>
        </div>
        <div className='all-todos'>
          <div className='todo'>
            <h3> React Tutorials </h3>
            <div className='todo-actions'>
              <button className='btn-complete-task'> Completed </button>
              <button className='btn-delete-task'> Delete </button>
            </div>
          </div>
          <div className='todo'>
            <h3> React Tutorials </h3>
            <div className='todo-actions'>
              <button className='btn-complete-task'> Completed </button>
              <button className='btn-delete-task'> Delete </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App