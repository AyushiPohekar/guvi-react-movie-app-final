import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useEffect } from 'react';

export function Editmovie() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setmovie] = useState(null);

  const getMovie=()=>{fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies/${id}`,{
    method:"GET",
  })
  .then((data)=>data.json())
  .then((mv)=>setmovie(mv));
  };
  useEffect(()=>getMovie(),[]);
  return movie?<EditMovieForm movie={movie}/>:"Loading...";
}

function EditMovieForm({movie})
{
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();
  const editmovie = () => {
    const updatedmovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // setmovieList([...movieList, newmovie]);

    //POST
    //1.METHOD-POST
    //2.

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedmovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
     
  };

return(
  <div className='add-movie-form'>

<TextField value={name} label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
<TextField value={poster} label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
<TextField value={rating} label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
<TextField value={summary} label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
<TextField value={trailer} label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
<Button onClick={editmovie} variant="outlined" color="success">Save</Button>
</div>)
}
