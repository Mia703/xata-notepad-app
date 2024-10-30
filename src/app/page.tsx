
import { Container, Typography } from "@mui/material";
import HashtagMenu from "./components/hashtagMenu";
import FilterMenu from "./components/filterMenu";
import Navigation from "./components/navigation";
import NotesContainer from "./components/notesContainer";

export default function Home() {
  return (
    <Container
      id="main-content"
      component={"main"}
      className="grid h-dvh grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12"
    >
      <Container
        component={"div"}
        className="relative col-span-4 h-dvh overflow-hidden bg-[--background] p-4 md:col-start-2 lg:col-start-5"
      >
        <Navigation current={"home"} />
        <Typography className="mb-5 text-[--white]" variant="h1">
          Your Notes
        </Typography>
        <div className="filter-container flex flex-row justify-between">
          <HashtagMenu />
          <FilterMenu />
        </div>
        <NotesContainer />
      </Container>
    </Container>
  );
}
