import { getXataClient } from "@/xata";

const xata = getXataClient();

export default async function Home() {
	const notes = await xata.db.Notes.getAll();
	return (
		<div>
			<p>Welcome to Xata, below is your first note</p>
			<div>
				{notes.length === 0 && <p>No notes found</p>}
				{notes.map((note) => (
					<div key={note.xata_id} className="note">
						<p>Title: {note.title}</p>
						<p>Content: {note.content}</p>
						<p>Tags: {note.tags}</p>
            <p>Date: {note.xata_createdat.toDateString()}</p>
					</div>
				))}
			</div>
		</div>
	);
}
