import { Message } from "./Message";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function MovieList() {
  const [movieList, setmovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setmovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  //delete first refresh later
  const deleteMovie = (id) => {
    fetch(`${API}movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="Movie-list">
        {movieList.map((mv) => (
          <Message
            key={mv.id}
            movie={mv}
            id={mv.id}
            
            deletebutton={
    <IconButton color="error" onClick={()=>deleteMovie(mv.id)} aria-label="Movie-Delete">
     <DeleteIcon  />
    </IconButton>
            }
            editbutton={
              <IconButton color="primary" onClick={() => navigate(`/movies/edit/${mv.id}`)} aria-label="Movie-edit">
     < EditIcon />
    </IconButton>
            }
            

            
           
          />
        ))}
      </div>
    </div>
  );
}
// const [name, setName] = useState("");
// const [rating, setRating] = useState("");
// const [poster, setPoster] = useState("");
// const [summary, setSummary] = useState("");
// const addmovie=()=>{const newmovie={
//   name:name,
//   poster:poster,
//   rating:rating,
//   summary:summary,
//  };
//  setmovieList([...movieList,newmovie]);
{
  /* <div className='add-movie-form'>
           
            <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
            <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
            <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
            <Button onClick={addmovie} variant="outlined">Add Movie</Button>
           
            
            
            </div> */
}
