import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");
  console.log(value);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          defaultValue="3-5"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid seletion</FormHelperText>
      </FormControl>
    </Box>
  );
}
