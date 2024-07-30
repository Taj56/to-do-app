import { useEffect, useState } from "react"
import db from "../appwrite/database"
import NoteForm from "../components/NoteForm"
import { Query } from "appwrite"
import Note from "../components/Note"
const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const res = await db.notes.list(
            [Query.orderDesc('$createdAt')]

        );

        setNotes(res.documents);
    }

  return (
    <div>
        <NoteForm  setNotes={setNotes}/>
        <div>
            {notes.map((note) => (
                <Note key={note.$id} noteData={note} setNotes={setNotes}/>
            ))}
        </div>
    </div>
  )
}
export default Notes