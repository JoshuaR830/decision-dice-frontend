import { Typography } from "@mui/material"

export type MotivatorData = {
  title: string
  description: string
  category: string
  userName: string
}


export default function Motivator({ title, description, userName, category }: MotivatorData) {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body">{description}</Typography>
    </>
  );
}