const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note"); 

function getNotes(){
return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");

}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement("textarea");
}


function addNote() {
    
}

function updateNote(id,newContent){

}

function deleteNote(id, element){

}