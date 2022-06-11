import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

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
export function Message({ movie,id }) {
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
    <div className='Movie-container'>
      <img className='Movie-poster' src={movie.poster} alt={movie.name} />

      <div className='Movie-individual'>
        <h3 className='Movie-name'>{movie.name}</h3>
        <p style={styles} className='Movie-rating'>&#11088;{movie.rating}</p></div>
      <button onClick={() => setShow(!show)}>toggle summary</button>
      <button onClick={()=>navigate(`/movies/${id}`)}>info</button>
      {/* conditional styling */}
      {/* <p style={parastyles} className='Movie-summary'>{movies.summary}</p> */}
      {show ? <p className='Movie-summary'>{movie.summary}</p> : null}
      <Counter />

    </div>
  );
}
