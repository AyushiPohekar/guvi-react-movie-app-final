import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




export function Message({ movie,id,deletebutton}) {
  //conditional styling
  const [show, setShow] = useState(true);
  const parastyles = {
    display: show ? "block" : "none",
  };

  const navigate=useNavigate();

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (
     <Card className='Movie-container' sx={{height:"min-content"}}>
      <img className='Movie-poster' src={movie.poster} alt={movie.name} />
     <CardContent>
      <div className='Movie-individual'>
        <h2 className='Movie-name'>{movie.name}
        <IconButton color="primary" onClick={()=>navigate(`/movies/${id}`)} aria-label="Movie-Details">
     <InfoIcon />
    </IconButton>
    <IconButton color="primary" onClick={() => setShow(!show)} aria-label="Summary">
     {show?< ExpandLessIcon/> :<ExpandMoreIcon/>}
    </IconButton>
    </h2>
        <p style={styles} className='Movie-rating'>&#11088;{movie.rating}</p></div>
      
 
      
      {/* conditional styling */}
      {/* <p style={parastyles} className='Movie-summary'>{movies.summary}</p> */}
      {show ? <p className='Movie-summary'>{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
      <Counter /> {deletebutton}
      </CardActions>

    </Card>
  );
}
//  function Addmovie()
//    {
//     const[movieName,setMovieName]=useState(movies.name);
//     const[moviePoster,setMoviePoster]=useState(movies.poster);
//     const[movieRating,setMovieRating]=useState(movies.rating);
//     const[movieSummary,setMovieSummary]=useState(movies.summary);
//      return(   
//     <div className="movieaddition">
//     <div><input value={movieName} onChange={(event1)=>console.log(event1.target.value)} placeholder="Name"/></div>
//     <div><input value={moviePoster} onChange={(event2)=>setMoviePoster(event2.target.value)} placeholder="Poster"/></div>
//     <div><input value={movieRating} onChange={(event3)=>setMovieRating(event3.target.value)} placeholder="Rating"/></div>
//     <div><input value={movieSummary} onChange={(event4)=>setMovieSummary(event4.target.value)}  placeholder="Summary"/></div>
//     <div>
//       <button onClick={(mn,mp,mr,ms)=>{setMovieName([...movies.name,mn]),
//       setMoviePoster([...movies.poster,mp]),
//       setMovieRating([...movies.rating,mr]),
//       setMovieSummary([...movies.summary,ms]),
//     return(setMovieName, setMoviePoster, setMovieRating,setMovieSummary);}
//        }>AddMovie</button>
//        {movies.map((mv,index)=>(<Message key={index} movie={mv}/>))}
//       </div> 
//       </div>
//   );
//  }