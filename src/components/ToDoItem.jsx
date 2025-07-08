function ToDoItem({todo, onDelete, onComplete}){
    return (
        <div className='todo'>
            <div className="todo-info">
                <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)}
                />
                <h3 className={todo.completed ? 'completed-text' : ''}> {todo.text} </h3>
            </div>
            <div className='todo-actions'>
              <button className='btn-delete-task' onClick={() => onDelete(todo.id)}> Delete </button>
            </div>
        </div>
    )
}

export default ToDoItem