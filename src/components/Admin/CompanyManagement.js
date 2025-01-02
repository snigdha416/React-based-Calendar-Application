import React, { useState } from "react";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    communicationPeriodicity: "2 weeks",
  });
  const [editing, setEditing] = useState(null);

  // Function to add a new company
  const handleAddCompany = () => {
    if (newCompany.name && newCompany.location && newCompany.linkedin) {
      setCompanies([...companies, newCompany]);
      setNewCompany({
        name: "",
        location: "",
        linkedin: "",
        emails: "",
        phoneNumbers: "",
        comments: "",
        communicationPeriodicity: "2 weeks",
      });
    }
  };

  // Function to edit a company
  const handleEditCompany = (index) => {
    setEditing(index);
    setNewCompany({ ...companies[index] });
  };

  // Function to update a company
  const handleUpdateCompany = () => {
    const updatedCompanies = companies.map((company, index) =>
      index === editing ? newCompany : company
    );
    setCompanies(updatedCompanies);
    setEditing(null);
    setNewCompany({
      name: "",
      location: "",
      linkedin: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      communicationPeriodicity: "2 weeks",
    });
  };

  // Function to delete a company
  const handleDeleteCompany = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  return (
    <Box sx={{ maxWidth: '900px', margin: 'auto', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Company Management
      </Typography>

      <Box sx={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add / Edit Company
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={newCompany.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={newCompany.location}
            name="location"
            onChange={handleChange}
          />
          <TextField
            label="LinkedIn Profile"
            variant="outlined"
            fullWidth
            value={newCompany.linkedin}
            name="linkedin"
            onChange={handleChange}
          />
          <TextField
            label="Emails"
            variant="outlined"
            fullWidth
            value={newCompany.emails}
            name="emails"
            onChange={handleChange}
            helperText="Separate multiple emails with commas."
          />
          <TextField
            label="Phone Numbers"
            variant="outlined"
            fullWidth
            value={newCompany.phoneNumbers}
            name="phoneNumbers"
            onChange={handleChange}
            helperText="Separate multiple numbers with commas."
          />
          <TextField
            label="Comments"
            variant="outlined"
            fullWidth
            value={newCompany.comments}
            name="comments"
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            label="Communication Periodicity"
            variant="outlined"
            fullWidth
            value={newCompany.communicationPeriodicity}
            name="communicationPeriodicity"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={editing !== null ? handleUpdateCompany : handleAddCompany}
          >
            {editing !== null ? "Update" : "Add"} Company
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>
        Current Companies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Company Name</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>LinkedIn</strong></TableCell>
              <TableCell><strong>Emails</strong></TableCell>
              <TableCell><strong>Phone Numbers</strong></TableCell>
              <TableCell><strong>Comments</strong></TableCell>
              <TableCell><strong>Periodicity</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company, index) => (
              <TableRow key={index}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell><a href={company.linkedin} target="_blank" rel="noopener noreferrer">{company.linkedin}</a></TableCell>
                <TableCell>{company.emails}</TableCell>
                <TableCell>{company.phoneNumbers}</TableCell>
                <TableCell>{company.comments}</TableCell>
                <TableCell>{company.communicationPeriodicity}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleEditCompany(index)} sx={{ marginRight: '0.5rem' }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDeleteCompany(index)}>
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

export default CompanyManagement;

