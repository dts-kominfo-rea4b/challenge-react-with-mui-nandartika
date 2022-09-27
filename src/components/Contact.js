// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={photo} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${phone}\n${email}`} />
    </ListItem>
  );
};

export default Contact;
