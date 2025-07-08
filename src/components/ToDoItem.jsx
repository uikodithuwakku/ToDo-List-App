function ToDoItem({todo}){
    return (
        <div className='todo'>
            <div className="todo-info">
                <input type="checkbox" />
                <h3> {todo.text}  </h3>
            </div>
            <div className='todo-actions'>
              <button className='btn-complete-task'> Edit </button>
              <button className='btn-delete-task'> Delete </button>
            </div>
        </div>
    )
}

export default ToDoItem