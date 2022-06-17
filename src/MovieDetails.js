import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState,useEffect } from 'react';




export function MovieDetails() {
const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setmovie] = useState({});

  const getMovie=()=>{fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/movies/${id}`).then(data=>data.json()).then((mv)=>setmovie(mv));
  };
  useEffect(()=>getMovie(),[]);


  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (
    <div>
      <iframe width="100%" height="550px" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className='Movie-detail-container'>
        <div className='Movie-individual'>
          <h3 className='Movie-name'>{movie.name}</h3>
          <p style={styles} className='Movie-rating'>&#11088;{movie.rating}</p>
        </div>
        <p className='Movie-summary'>{movie.summary}</p>
        <Button onClick={()=>navigate(-1)} variant="outlined" startIcon={< ArrowBackIosIcon/>}>
         Back
        </Button>
        
      </div>
    </div>

  );
}
