import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counters-container">
        
    
    <Badge badgeContent={like} color="primary">
    <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="Movie-Details">
     👍
    </IconButton>
</Badge>
<Badge badgeContent={dislike} color="error">  
 <IconButton color="primary" onClick={() => setDisLike(dislike + 1)} aria-label="Movie-Details">
     👎
    </IconButton></Badge>
      {/* <button onClick={() => setLike(like + 1)}>&#128077;{like}</button>
      <button onClick={() => setDisLike(dislike + 1)}>&#128078;{dislike}</button> */}
    </div>
  );
}
