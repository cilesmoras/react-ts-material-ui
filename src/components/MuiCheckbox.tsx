import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function MuiCheckbox() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  function handleOnchange(event: ChangeEvent<HTMLInputElement>): void {
    setAcceptTnC(event.target.checked);
  }

  console.log(skills);
  function handleSkillChange(event: ChangeEvent<HTMLInputElement>) {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              // size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleOnchange}
            />
          }
        />
        <Box>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC}
            onChange={handleOnchange}
          />
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="css"
                    checked={skills.includes("css")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Javascript"
                control={
                  <Checkbox
                    value="javascript"
                    checked={skills.includes("javascript")}
                    onChange={handleSkillChange}
                  />
                }
              />
            </FormGroup>
            <FormHelperText>Invalid selection</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
