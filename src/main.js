const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note"); 

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
});

function getNotes(){
return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");

}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value = content;
    element.placeholder = "empty sticky note";

    element.addEventListener("change",()=>{
        updateNote(id, element.value);
    });
    element.addEventListener("dblclick", () =>{
        const doDelete = confirm("are you sure about that?");

        if (doDelete) {
            deleteNote(id, element)
        }
    });

    return element;
}


function addNote() {
    
}

function updateNote(id,newContent){
    console.log("updating note...");
    console.log(id, newContent);

}

function deleteNote(id, element){
    console.log("deleting note...");
    console.log(id, newContent);
}