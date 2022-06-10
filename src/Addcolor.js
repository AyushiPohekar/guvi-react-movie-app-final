import { useState } from "react";
import { Colorbox } from "./Colorbox";

// function Message({ poster, name, rating, summary }) {
//   const styles={
//     color:rating >8 ?"green":"red",
//   };
//   return (
//     <div className='Movie-container'>
//       <img className='Movie-poster' src={poster} alt={name}
//       />
//       <div className='Movie-individual'>
//       <h3 className='Movie-name'>{name}</h3>
//       <p style={styles}className='Movie-rating'>&#11088;{rating}</p></div>
//       <button>toggle</button>
//       <p className='Movie-summary'>{summary}</p>
//       <Counter/>
//     </div>
//   );
// }
export function Addcolor() {
  const [color, setColor] = useState("skyblue");
  const styles = {
    backgroundColor: color,
  };
  const INITIAL_COLORLIST = ["green", "yellow", "blue"];
  const [ColorList, setColorlist] = useState(INITIAL_COLORLIST);
  return (
    <div className="ColorAddition">
      <input value={color} style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a Color" />
      <button onClick={() => setColorlist([...ColorList, color])}>AddColor </button>
      {ColorList.map((clr, index) => (<Colorbox key={index} color={clr} />))}
    </div>
  );
}
