import React, {useEffect, useState} from 'react';
import {db} from '../firebase';
import { collection, onSnapshot} from 'firebase/firestore';
import "./Searchy.css";
import Button from '@mui/material/Button';

export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setMovies(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="App">

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />

          <Button onClick={() => onSearch(value)} style= {{ backgroundColor: 'red', color: 'white'}}>Search</Button>
        </div>
        <div className="dropdown">
          {movies
          .filter((item) => {
              const searchTerm = value.toLowerCase();
              const mname = item.name.toLowerCase();

              return (
                searchTerm &&
                mname.startsWith(searchTerm) &&
                mname !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}