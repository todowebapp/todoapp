class Entry
{
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }
    
    setCompleted(completed) {
        this.completed = completed;
    }
    
    toggleCompleted() {
        this.completed = !this.completed;
    }
};


class ToDoList
{
    constructor(name) {
        this.name = name;
        this.entries = [];
    }
    
    addEntry(entry) {
        this.entries.push(entry);
    }
    
    createEntry(text) {
        let entry = new Entry(text);
        this.entries.push(entry);
    }
};


function storeToDoLists(toDoLists) {
    
}

function loadToDoLists() {
    
}


/////////


let toDoLists = [];

function onListClick(listName) {
    alert(`Liste geklickt: ${listName}`);
}

function onLoad() {
    alert("On Load");
}
