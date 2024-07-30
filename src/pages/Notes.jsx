import { useEffect, useState } from "react"
import db from "../appwrite/database"
import NoteForm from "../components/NoteForm"
const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const res = await db.notes.list();

        setNotes(res.documents);
    }

  return (
    <div>
        <NoteForm  setNotes={setNotes}/>
        <div>
            {notes.map((note) => (
                <div key={note.$id}>{note.body}</div>
            ))}
        </div>
    </div>
  )
}
export default Notes