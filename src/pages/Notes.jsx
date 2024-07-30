import { useEffect, useState } from "react"
import { databases } from "../appwrite/config"
const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const res = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID_NOTES
        );

        setNotes(res.documents);
    }

  return (
    <div>
        <div>
            {notes.map((note) => (
                <div key={note.$id}>{note.body}</div>
            ))}
        </div>
    </div>
  )
}
export default Notes