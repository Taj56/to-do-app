import db from "../appwrite/database";
import Send from "../assets/Send";


// eslint-disable-next-line react/prop-types
const NoteForm = ({setNotes}) => {

    const handleAdd = async (e) =>{
        e.preventDefault()
        const noteBody = e.target.body.value;

        if(noteBody === "") return

        try {

            const payload = {body: noteBody}

            const res = await db.notes.create(payload)
            setNotes((prevState) => [res, ...prevState])

            e.target.reset();
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleAdd} id="todo-form">
        <Send />
        <input type="text" 
        name="body"
        placeholder="Add a note..."
        />
    </form>
  )
}
export default NoteForm