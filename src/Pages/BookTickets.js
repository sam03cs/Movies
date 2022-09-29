import './BookTickets.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const movies = [
  {
    name: 'The Lego Movie',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Batman',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Wonderwoman',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'The Lion King',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const times = [
    {
        time: '10:30pm'
    },
    {
        time: '6:00pm'
    },
    {
        time: '11:00am'
    },
]

const ages = [
    {
        age: '0-8yrs',
        price: 8,
    },
    {
        age: '9-17yrs',
        price: 9,
    },
    {
        age: '18-64yrs',
        price: 10,
    },
    {
        age: '+65yrs',
        price: 6,
    }
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

export default function Book() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate('/Checkout');
  }

  return (
    <div className="Book">
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
      <Button onClick={navigateToCheckout} variant="contained" style= {{ backgroundColor: 'red'}}>Book Tickets</Button>
    </div>
  )
}

function Movies({ movie, onChange }) {
  return (
    <div>
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.name} value={movie.name}>
            {movie.name}
          </option>
          
        ))}
      </select>
    </div>

    <div className="Time">
    <label htmlFor="time">Time</label>
    <select
        id="time"
        value={times.time}
        onChange={e => {
        onChange(times.find(times => times.time === e.target.value))
        }}
    >
    {times.map(times => (
    <option key={times.time} value={times.time}>
      {times.time}
    </option>
    
    ))}
    </select>
    </div>

    <div className="Age">
    <label htmlFor="age">Age</label>
    <select
        id="age"
        value={ages.age}
        onChange={e => {
        onChange(ages.find(ages => ages.age === e.target.value))
        }}
    >
    {ages.map(ages => (
    <option key={ages.age} value={ages.age}>
      {ages.age} (${ages.price})
    </option>
    
    ))}
    </select>
    </div>
        </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}