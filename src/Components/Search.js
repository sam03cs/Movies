import React, { useEffect, useState } from "react";
import ResultList from "./ResultList";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './Searchbar';
import { db } from "../firebase";
import { MovieSharp } from "@mui/icons-material";
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
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  //const [users, setUsers] = React.useState([]);
  //const [filteredMovies, setFilteredMovies] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("movies").orderBy("genre").get();
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  /* useEffect(() => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.city.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, contacts]); */

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
          <ResultList />
        </Box>
      </Modal>
    </div>
  );
}