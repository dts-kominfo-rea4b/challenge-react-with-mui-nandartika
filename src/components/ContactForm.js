// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = () => {
    const newContact = { name, phone, email, photo };
    handleAddContact(newContact);
  };

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item>
        <TextField
          label="Nama"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
          fullWidth
          required
        />
      </Grid>

      <Grid item>
        <TextField
          label="Phone"
          variant="filled"
          onChange={(event) => setPhone(event.target.value)}
          fullWidth
          required
        />
      </Grid>

      <Grid item>
        <TextField
          label="Email"
          variant="filled"
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          required
        />
      </Grid>

      <Grid item>
        <TextField
          label="Photo URL"
          variant="filled"
          onChange={(event) => setPhoto(event.target.value)}
          fullWidth
          required
        />
      </Grid>

      <Grid item>
        <Button onClick={handleSubmit}>ADD NEW</Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
