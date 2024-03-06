import { contactData } from "./../Data/ContactData";
import { Grid, Card, CardContent, CardHeader, Avatar, Typography, ListSubheader, List } from "@mui/material";

export default function ContactCardGrid() {
  return (
    <Grid container alignItems>
      {contactData.map((contact) => {
        return (
          <Grid item key={contact.name}>
            <Card>
              <CardHeader
                title={contact.name}
                subheader={contact.role}
                avatar={
                  <Avatar>
                    {contact.name?.substring(0, 1).toUpperCase() || "A"}
                  </Avatar>
                }
              />
              <CardContent>
                <Typography>
                    <b>Start Date: </b>{contact.startDate}
                </Typography>
                <Typography>
                    <b>Work Preference: </b>{contact.preference}
                </Typography>
                <List subheader={
                    <ListSubheader>
                        Skills:
                    </ListSubheader>
                }>
                    {
                        contact.skills?.map((skill) => {
                            return <li>{skill}</li>
                        })
                    }
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
