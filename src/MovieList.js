import { Message } from "./Message";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function MovieList() {
  const [movieList, setmovieList] = useState([]);

  const getMovies=()=>{fetch("https://62a970daec36bf40bdb78cff.mockapi.io/movies").then(data=>data.json()).then((mvs)=>setmovieList(mvs));
  };

  useEffect(()=>getMovies(),[]);

 //delete first refresh later
  const deleteMovie=(id)=>{fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies/${id}`,{
    method:'DELETE',
  }).then(()=>getMovies())
};

const navigate = useNavigate();
  return (
    <div>
      <div className="Movie-list">
        {movieList.map((mv) => (<Message key={mv.id} movie={mv} id={mv.id} 
        deletebutton={<button onClick={()=>deleteMovie(mv.id)}>Delete</button>}
          editbutton={<button onClick={()=>navigate(`/movies/edit/${mv.id}`)}>Edit</button>}/>
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
  {/* <div className='add-movie-form'>
           
            <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
            <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
            <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
            <Button onClick={addmovie} variant="outlined">Add Movie</Button>
           
            
            
            </div> */}