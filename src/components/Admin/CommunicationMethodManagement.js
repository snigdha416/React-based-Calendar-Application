import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const CommunicationMethodManagement = () => {
  const defaultMethods = [
    { name: "LinkedIn Post", description: "LinkedIn post about the company", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Message sent via LinkedIn", sequence: 2, mandatory: true },
    { name: "Email", description: "Sending an email to the company", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Calling the company", sequence: 4, mandatory: false },
    { name: "Other", description: "Other method of communication", sequence: 5, mandatory: false },
  ];

  const [methods, setMethods] = useState(defaultMethods);
  const [newMethod, setNewMethod] = useState({ name: "", description: "", sequence: methods.length + 1, mandatory: false });
  const [editing, setEditing] = useState(null);

  const handleAddMethod = () => {
    if (newMethod.name && newMethod.description) {
      setMethods([...methods, newMethod]);
      setNewMethod({ name: "", description: "", sequence: methods.length + 1, mandatory: false });
    }
  };

  const handleEditMethod = (index) => {
    setEditing(index);
    setNewMethod({ ...methods[index] });
  };

  const handleUpdateMethod = () => {
    const updatedMethods = methods.map((method, index) =>
      index === editing ? newMethod : method
    );
    setMethods(updatedMethods);
    setEditing(null);
    setNewMethod({ name: "", description: "", sequence: methods.length + 1, mandatory: false });
  };

  const handleDeleteMethod = (index) => {
    const updatedMethods = methods.filter((_, i) => i !== index);
    setMethods(updatedMethods);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod({ ...newMethod, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <Box sx={{ maxWidth: '900px', margin: 'auto', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Communication Methods Management
      </Typography>

      <Box sx={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add / Edit Communication Method
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={newMethod.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={newMethod.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            label="Sequence"
            variant="outlined"
            fullWidth
            type="number"
            value={newMethod.sequence}
            name="sequence"
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newMethod.mandatory}
                onChange={handleChange}
                name="mandatory"
                color="primary"
              />
            }
            label="Mandatory"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={editing !== null ? handleUpdateMethod : handleAddMethod}
          >
            {editing !== null ? "Update" : "Add"} Method
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>
        Current Communication Methods
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Sequence</strong></TableCell>
              <TableCell><strong>Mandatory</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {methods.map((method, index) => (
              <TableRow key={index}>
                <TableCell>{method.name}</TableCell>
                <TableCell>{method.description}</TableCell>
                <TableCell>{method.sequence}</TableCell>
                <TableCell>{method.mandatory ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleEditMethod(index)} sx={{ marginRight: '0.5rem' }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDeleteMethod(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CommunicationMethodManagement;
