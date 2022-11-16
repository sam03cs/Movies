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
import MainModal from '../Components/Modal';
import SearchModal from '../Components/Search';
import PetsIcon from '@mui/icons-material/Pets';
//import { NavLink } from 'react-router-dom';
//firebase imports needed to access database
import {db} from '../firebase';
import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';

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
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //the collection db, "users" calls upon a database named users in the firebase setup
    const unsub = onSnapshot(collection(db,"users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setUsers(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
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
          {users && users.map((item) => (
            <Grid item key = {item.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                component="img"
                height="140"
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
                    <MainModal />
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
                    <MainModal />
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