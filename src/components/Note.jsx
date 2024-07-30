import { useState } from "react"
import db from "../appwrite/database";
import DeleteIcon from "../assets/DeleteIcon";

// eslint-disable-next-line react/prop-types
const Note = ({noteData, setNotes}) => {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async ()=>{
        const completed = !note.completed;
        db.notes.update(note.$id, {completed});
        setNote({...note, completed: completed});
    }

    const handleDelete = async ()=>{
        const res = await db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
    }

  return (
    <div>
        <span onClick={handleUpdate}>
            {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
        </span>

        <div onClick={handleDelete}>
            <DeleteIcon />
        </div>
    </div>
  )
}
export default Note