// add a new TODOs
export function addToDo(toDoText){
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