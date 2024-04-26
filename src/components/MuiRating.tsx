import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating, Stack, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(3);

  console.log(value);
  function handleChange(
    event: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) {
    setValue(newValue);
  }

  return (
    <Stack spacing={2}>
      <Typography component="legend">Rating</Typography>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
}
