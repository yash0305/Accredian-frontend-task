import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box } from '@mui/material';
import ReferForm from './ReferForm';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Refer & Earn
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Refer your friends and earn rewards when they enroll in our course!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="refer-modal-title"
        aria-describedby="refer-modal-description"
      >
        <Box sx={modalStyle}>
          <ReferForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default App;
