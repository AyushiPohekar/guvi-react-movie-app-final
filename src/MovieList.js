import { Message } from "./Message";

export function MovieList({ movieList, setmovieList }) {
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
  return (

    <div>
      {/* <div className='add-movie-form'>
           
            <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
            <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
            <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
            <Button onClick={addmovie} variant="outlined">Add Movie</Button>
           
            
            
            </div> */}
      <div className="Movie-list">
        {movieList.map((mv, index) => (<Message key={index} movie={mv} id={index} />))}
      </div>
    </div>
  );
}
