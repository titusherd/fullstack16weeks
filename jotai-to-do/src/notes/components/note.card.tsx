import moment from "moment";

interface NoteCardProps {
  content: string;
  createdAt: Date;
  username: string;
}

export const NoteCard = ({ content, createdAt, username }: NoteCardProps) => {
  return (
    <>
      <div>{content}</div>
      <div>{moment(createdAt).fromNow()}</div>
      <div>{username}</div>
    </>
  );
};
