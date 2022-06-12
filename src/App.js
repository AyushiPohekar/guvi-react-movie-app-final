
import logo from './logo.svg';
import './App.css';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { Addcolor } from "./Addcolor";
import { useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { Addmovie } from './Addmovie';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';



function App() {

  const movie = [

    {

      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {

      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {

      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {

      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {

      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {

      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {

      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }


  ];
  const [movieList, setmovieList] = useState(movie);
  const navigate = useNavigate();

  return (

    <div className="App">

      {/* {movies.map((movies) => (<Message poster={movies.poster} name={movies.name} rating={movies.rating} summary={movies.summary} />
          ))}  */}
      {/* {{movies.map((movies) => (<Message  poster={movies.poster}  />
      ))}
      <div className='Movie-title'>
        {movies.map((movies1)=>(<Message name={movies.name} rating={movies1.rating}/>
        ))} 
        </div>
        {movies.map((movies2) => (<Message  summary={movies2.summary}  />
        ))}} */}

      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate('/')} color="inherit">Home</Button>
          <Button onClick={() => navigate('/movies')} color="inherit">Movies</Button>
          <Button onClick={() => navigate('/movies/add')} color="inherit">Add Movie</Button>
          <Button onClick={() => navigate('/color-game')} color="inherit">Color Game</Button>
        </Toolbar>
      </AppBar>
      {/* <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/color-game'>Color Game</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
          
          </ul>
        </nav> */}
        <section className='route-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />
        <Route path="/movies/add" element={<Addmovie movieList={movieList} setmovieList={setmovieList} />} />
        <Route path="/color-game" element={<Addcolor />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setmovieList={setmovieList} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes></section>


      {/* <MovieList movieList={movieList} setmovieList={setmovieList}/>
      <Addcolor/> */}
      {/* <Addmovie/> */}
    </div>


  );

}
export default App;


