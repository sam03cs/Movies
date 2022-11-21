//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./MainPage.css";
//import Navbar from '../Components/Navbar';
//import SearchBar from '../Components/Searchbar';
//import MainModal from '../Components/Modal';
import SearchModal from '../Components/Search';
import PetsIcon from '@mui/icons-material/Pets';
import FilterListIcon from '@mui/icons-material/FilterList';
//import { NavLink } from 'react-router-dom';
//firebase imports needed to access database
import {db} from '../firebase';
import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
//import * as React from 'react';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YoutubeEmbed from "../Components/YoutubeEmbed";
import {useNavigate} from 'react-router-dom'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const cards = [
  { card: 1, name: 'The Lego Movie', image: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg"},
  { card: 2, name: 'Batman', image: "https://i.ebayimg.com/images/g/zRAAAOSwvaJgJSg1/s-l500.jpg"},
  { card: 3, name: 'Hello Kitty', image: "https://i.ebayimg.com/images/g/X5AAAOSwn21ixz0l/s-l500.png" }
];

const ucards = [
  { card: 1, name: 'Batman v Superman', image: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1519914/3835138/XPSMX5072__16213.1654734420.jpg?c=2"},
  { card: 2, name: 'Black Adam', image: "https://i.ebayimg.com/images/g/BdoAAOSwzgdiHKBN/s-l500.jpg"},
  { card: 3, name: 'Black Panther: Wakanda Forever', image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" }
];

const theme = createTheme();

const Album = () => {
//export default function Album() {
//these consts and useeffeect allow for fetching from database

  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  /*const handleChange = e => {
    let filterResults = movies.filter(record => {
      record.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

    console.log('filterResults: \n', filterResults);

    setSearchResults(filterResults);
  }; */

  

  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setMovies(list);
      setSearchResults(list);
      setLoading(false);

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState('');
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/BookTickets');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" class="bar">
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Watchdawgs
          </Typography>
          <a href class="search"> <SearchModal /> </a>
          <a href="SignIn" class="login">
              Login
          </a>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Watchdawgs 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The premier website for booking your next movie theater visit on UGA campus!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>

          <h1><center>Upcoming Movies</center></h1>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}


 {/* below are samir's changes, the database fields are name, rating, genre, info, datetime, and img
right now img is blank because i'm still working on getting the image to load
also datetime is just stored as a string bc im working on getting the date and time to store correctly */}


 <Grid container spacing={4}>
          {movies && movies.map((item) => (
            <Grid item key = {item.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                component="img"
                height="100%"
                image={item.img}
                alt="get from database"
              />
                <CardContent sx={{ flexGrow: 1 }} title={`name : ${item.name}`}>
                <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" >
                      {item.rating}
                    </Typography>
                    <Typography variant="body2" >
                      {item.genre}
                    </Typography>
                    <Typography variant="body2" >
                      {item.info}
                    </Typography>
                    <Typography variant="body2" >
                      {item.datetime}
                    </Typography>
                    <Button onClick={() => {setOpen(true); setModalData(item);}} style= {{ color: 'red'}}>View</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                    >
                    <Box sx={style}>
                      <Typography variant="h6" component="h2">
                        {modalData.name}
                      </Typography>
                      <Typography class='rating'>
                        {modalData.genre} | {modalData.rating}
                      </Typography>
                      <div sx='h1' style= {{ color: 'red'}}>
                        Showtimes
                      </div>
                      <Typography class="showtime">
                        11:00am 6:00pm 10:30pm
                      </Typography>
                      <Button onClick={navigateToBooking} variant="contained" style= {{ backgroundColor: 'red'}}>Book Tickets</Button>
                      <div><br></br></div>
                      <YoutubeEmbed embedId={modalData.youtubelink} />
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalData.info}
                      </Typography>
                    </Box>
                    </Modal>

                  </CardContent>
                  
                </Card>
            </Grid>
          ))}

            {ucards.map((card) => (
              <Grid item key={ucards.indexOf(card)} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={card.image}//"https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} title={`name : ${card.name}`}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/*<MainModal />*/}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <br></br><br></br>
        <br></br><br></br>
        <h1><center>Now Showing</center></h1>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={cards.indexOf(card)} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={card.image}//"https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} title={`name : ${card.name}`}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/*<MainModal />*/}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};
export default Album;