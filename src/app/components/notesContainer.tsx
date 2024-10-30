import { Container, Typography } from "@mui/material";
import Note from "./note";
import { getXataClient } from "@/xata";

const xata = getXataClient();

export default async function NotesContainer() {
  const notes = await xata.db.Notes.getAll();
  const today = new Date();
  return (
    <Container
      component={"div"}
      id="notes-container"
      className="my-2 h-full overflow-scroll px-0"
    >
      {notes.length === 0 && <Typography variant="body1"></Typography>}
      {notes.map((noteItem, index) =>
        noteItem.title &&
        noteItem.content &&
        noteItem.tags &&
        noteItem.xata_createdat ? (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            date={noteItem.xata_createdat}
            tags={noteItem.tags}
          />
        ) : null,
      )}
    </Container>
  );
}
