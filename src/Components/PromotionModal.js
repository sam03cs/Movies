import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import YoutubeEmbed from "./YoutubeEmbed";
//import {useNavigate} from 'react-router-dom'
import "./Modal.css";
import TextField from '@mui/material/TextField';
//import AddIcon from '@mui/icons-material/Add';

const style = {
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

export default function AdminModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /*const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/BookTickets');
  }*/

  return (
    <div>
      <Button onClick={handleOpen} style= {{ color: 'white', backgroundColor: 'red'}}>Edit Promotion</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter New Promo Code
          </Typography>
          <TextField
            id="cardName"
            label="Promo Code"
            width="50%"
          />
          <Button style= {{color: 'white', backgroundColor: 'red', margin: 10}}>Submit</Button>
          
        </Box>
      </Modal>
    </div>
  );
}