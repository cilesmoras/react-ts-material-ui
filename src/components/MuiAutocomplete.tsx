import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Stack,
  TextField,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];

const skillsOptions: readonly Skill[] = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function MuiAutocomplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkills] = useState<Skill | null>(null);

  function handleSkillsChange(
    event: SyntheticEvent<Element, Event>,
    value: Skill | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Skill> | undefined
  ): void {
    setSkills(value);
  }

  console.log(skill);
  function handleChange(
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) {
    setValue(value);
  }

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />

      <Autocomplete
        options={skillsOptions}
        // getOptionLabel={(option: Skill) => option.label}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={handleSkillsChange}
      />
    </Stack>
  );
}
