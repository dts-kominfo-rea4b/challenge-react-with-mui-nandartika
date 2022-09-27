import { CountertopsOutlined, Photo } from "@mui/icons-material";
import { Grid, List, Stack } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import contactsJSON from "./data/contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);

  const handleAddContact = (newContact) => {
    const newContacts = [
      ...contacts,
      {
        name: newContact.name,
        phone: newContact.phone,
        email: newContact.email,
        photo: newContact.photo,
      },
    ];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Stack spacing={5}>
        <Header />

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <ContactForm handleAddContact={handleAddContact} />
          </Grid>

          <Grid item xs={4}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {contacts.map((contact, index) => (
                <Contact key={index} data={contact} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default App;
