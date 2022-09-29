import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './Searchbar';
//import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '117px',
  left: '68%',
  transform: 'translate(-50%, -50%)',
  width: 0,
  bgcolor: 'black',
  border: '0px solid #000',
  borderRadius: 0,
  boxShadow: 0,
  p: 0,
};

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <SearchIcon style={{ color: 'red' }}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SearchBar />
        </Box>
      </Modal>
    </div>
  );
}