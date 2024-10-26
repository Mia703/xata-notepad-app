"use client";
import { Container, Typography } from "@mui/material";
import HashtagMenu from "./components/hashtagMenu";
import FilterMenu from "./components/filterMenu";
import Note from "./components/note";

export default function Home() {
  const today = new Date();
  return (
    <Container
      id="main-content"
      component={"main"}
      className="grid h-dvh grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12"
    >
      <Container
        component={"div"}
        className="col-span-4 bg-[--background] p-4 md:col-start-2 lg:col-start-5"
      >
        <Typography className="mb-5 text-[--white]" variant="h1">
          Your Notes
        </Typography>
        <div className="filter-container flex flex-row justify-between">
          <HashtagMenu />
          <FilterMenu />
        </div>
        <Container
          component={"div"}
          id="notes-container"
          className="my-2 grid grid-cols-1 gap-4 px-0"
        >
          <Note
            title={"hello world"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum, unde ea quisquam autem mollitia. Quas corrupti fuga natus iusto aperiam labore, amet ratione explicabo vero magnam, ex, odio sequi."
            }
            date={today}
            tags={["da", "da"]}
          />
          <Note
            title={"hello world"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum, unde ea quisquam autem mollitia. Quas corrupti fuga natus iusto aperiam labore, amet ratione explicabo vero magnam, ex, odio sequi."
            }
            date={today}
            tags={["da", "da"]}
          />
        </Container>
      </Container>
    </Container>
  );
}
