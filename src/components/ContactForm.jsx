import {
  Autocomplete,
  Paper,
  FormControl,
  FormGroup,
  TextField,
  MenuItem,
  ListItemText,
  Select,
} from "@mui/material";
import { useState } from "react";

const skills = ["React", "Angular", "Python", "NodeJS"];
const roles = ["Software Dev", "Project Manager"];

export default function ContactForm() {
  const [skill, setSkill] = useState("");
  const handleOnChange = (event) => {
    setSkill(event.target.value);
  };
  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row>
            <TextField id="name" name="name" label="Name" variant="outlined" />
            <Autocomplete
              options={roles}
              renderInput={(params) => {
                return <TextField name="role" {...params} />;
              }}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Select
              id="skill-select"
              value={skill}
              onChange={handleOnChange}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
