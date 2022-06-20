import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export function Addmovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
  const addmovie = () => {
    const newmovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // setmovieList([...movieList, newmovie]);

    //POST
    //1.METHOD-POST
    //2.data and JSON
    //3.headers-JSON

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));

  };

  return (

    <div className='add-movie-form'>

      <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
      <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
      <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
      <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
      <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
      <Button onClick={addmovie} variant="outlined">Add Movie</Button>
    </div>

  );
}
