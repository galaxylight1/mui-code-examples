import {
  Autocomplete,
  Paper,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";

const skills = ["React", "Angular", "Python", "NodeJS"];
const roles = ["Software Dev", "Project Manager"];

export default function ContactForm() {
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
              <Select></Select>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
