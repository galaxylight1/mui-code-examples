import { contactData } from "./../Data/ContactData";
import { Grid, Card, CardContent, CardHeader, Avatar } from "@mui/material";

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
              <CardContent></CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
