import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import YoutubeEmbed from "./YoutubeEmbed";
import {useNavigate} from 'react-router-dom'
import cards from '../Pages/MainPage';

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

export default function MainModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/BookTickets');
  }

  return (
    <div>
      <Button onClick={handleOpen} style= {{ color: 'red'}}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The Lego Movie
          </Typography>
          <div sx='h1' style= {{ color: 'red'}}>
            Showtimes
          </div>
          <Typography class="showtime">
            11:00am 6:00pm 10:30pm
          </Typography>
          <Button onClick={navigateToBooking} variant="contained" style= {{ backgroundColor: 'red'}}>Book Tickets</Button>
          <div><br></br></div>
          <YoutubeEmbed embedId="fZ_JOBCLF-I" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Emmet (Chris Pratt), an ordinary LEGO figurine who always follows the rules, is mistakenly identified as the Special -- an extraordinary being and the key to saving the world. He finds himself drafted into a fellowship of strangers who are on a mission to stop an evil tyrant's (Will Ferrell) plans to conquer the world. Unfortunately for Emmet, he is hopelessly -- and hilariously -- unprepared for such a task, but he'll give it his all nonetheless.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}