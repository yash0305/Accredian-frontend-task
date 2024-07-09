import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ReferForm = ({ handleClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      alert('Please fill all the fields');
      return;
    }
    console.log({ referrerName, referrerEmail, refereeName, refereeEmail });
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" component="h2">
        Refer a Friend
      </Typography>
      <TextField
        label="Your Name"
        variant="outlined"
        value={referrerName}
        onChange={(e) => setReferrerName(e.target.value)}
        required
      />
      <TextField
        label="Your Email"
        variant="outlined"
        type="email"
        value={referrerEmail}
        onChange={(e) => setReferrerEmail(e.target.value)}
        required
      />
      <TextField
        label="Friend's Name"
        variant="outlined"
        value={refereeName}
        onChange={(e) => setRefereeName(e.target.value)}
        required
      />
      <TextField
        label="Friend's Email"
        variant="outlined"
        type="email"
        value={refereeEmail}
        onChange={(e) => setRefereeEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ReferForm;
