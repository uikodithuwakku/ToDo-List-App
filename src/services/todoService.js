// Function to Add a new TODOs
export function createNewToDo(toDoText){
    if(!toDoText.trim()){
        return null;
    }

    const newToDo = {
        id: Date.now(),
        text: toDoText.trim(),
        completed: false
    };

    return newToDo;
}

// Function to Deleet a new TODOs
export function deleteToDo(toDoList, toDoId){
    return toDoList.filter((todo) => todo.id !== toDoId);
}

// Function to mark completed TODOs
export function completedToDo(toDoList, toDoId){
    return toDoList.map((todo) => todo.id === toDoId ? {...todo, completed : !todo.completed} : todo);
}

// Function to save ToDos to the local storage
export function saveToDosToStorage(todos){
    try{
        localStorage.setItem('todos' , JSON.stringify(todos));
        console.log("ToDos save to local Storage.........");
    } catch (error){
        console.log('Error loading Todos.........');
    }
}

// Function to load ToDos from the local storage
export function loadToDosFromStorage(){
    try{
        const savedToDos = localStorage.getItem('todos');
        return savedToDos ? JSON.parse(savedToDos) : [];
    } catch (error){
        console.log('Error loading Todos.........');
        return [];
    }
}