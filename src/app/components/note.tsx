import { Card, CardContent, Typography } from "@mui/material";

interface NotesProps {
  title: string;
  content: string;
  date: Date;
  tags: string;
}

function separateTags(tagsList: string) {
  tagsList = tagsList.replaceAll(" ", "#");
  tagsList = tagsList.replaceAll(",", " ");
  return "#".concat(tagsList);
}
const Note: React.FC<NotesProps> = ({ title, content, date, tags }) => {
  return (
    <Card className="my-4 hover:cursor-pointer">
      <CardContent>
        <Typography variant="h1" className="my-2" sx={{ fontSize: "0.9em" }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          className="line-clamp-3 text-[--medium-grey]"
          sx={{ fontSize: "0.8em" }}
        >
          {content}
        </Typography>
        <div className="sub-data-container mt-4 flex flex-row justify-between text-[--medium-grey]">
          <Typography className="hashtag" sx={{ fontSize: "0.8em" }}>
            {separateTags(tags)}
          </Typography>
          <Typography
            className="date"
            sx={{ fontSize: "0.8em" }}
          >{`${date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`}/${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`}/${date.getFullYear()}`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Note;
