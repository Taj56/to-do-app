import db from "../appwrite/database";


const NoteForm = ({setNotes}) => {

    const handleAdd = async (e) =>{
        e.preventDefault()
        const noteBody = e.target.body.value;

        try {

            const payload = {body: noteBody}

            const res = await db.notes.create(payload)
            setNotes((prevState) => [res, ...prevState])
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleAdd}>
      <input type="text" 
      name="body"
      placeholder="Add a note..."
      />
    </form>
  )
}
export default NoteForm