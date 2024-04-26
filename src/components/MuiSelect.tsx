import { Box, MenuItem, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  // console.log(countries);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  }
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        color="secondary"
        helperText="This is a helper text"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}
