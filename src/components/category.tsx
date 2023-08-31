import { Chip } from "@mui/material";

type CategoryData = {
    categoryName: string
    userName: string
  }

export default function Category({ categoryName }: CategoryData) {
    return (
        <Chip color="primary" label={categoryName} variant="outlined" />
    );
}