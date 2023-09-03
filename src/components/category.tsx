import { Chip } from "@mui/material";
import { API_BASE_URL } from '../constants'
import { replaceSpaces } from "@/helpers/stringReplacementHelper";

type CategoryData = {
  categoryName: string
  userName: string
  onCategoryClick: () => void
}

export default function Category({ categoryName, userName, onCategoryClick }: CategoryData) {
  function getMotivators() {
    fetch(replaceSpaces(`${API_BASE_URL}/feeds/motivator/${userName}/${categoryName}`))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

    return (


        <Chip color="primary" label={categoryName} variant="outlined" onClick={onCategoryClick} />
    );
}