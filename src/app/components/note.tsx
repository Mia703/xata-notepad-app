import { Card, CardContent, Typography } from "@mui/material";

interface NotesProps {
  title: String;
  content: String;
  date: Date;
  tags: String[];
}
const Note: React.FC<NotesProps> = ({title, content, date, tags }) => {
  return (
    <Card className="col-span-1">
      <CardContent>
        <Typography variant="h1" className="my-2">
          {title}
        </Typography>
        <Typography variant="body1" className="text-[--medium-grey]">
          {content}
        </Typography>
        <div className="sub-data-container mt-4 flex flex-row justify-between text-[--medium-grey]">
          <Typography className="hashtag">
            {tags
              ? tags.map((tagItem) => {
                  return <span className="text-xs">#{tagItem} </span>;
                })
              : ""}
          </Typography>
          <Typography className="text-xs">{`${date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`}/${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`}/${date.getFullYear()}`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Note;
