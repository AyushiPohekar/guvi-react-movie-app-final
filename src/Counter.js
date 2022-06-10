import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counters-container">
      <button onClick={() => setLike(like + 1)}>&#128077;{like}</button>
      <button onClick={() => setDisLike(dislike + 1)}>&#128078;{dislike}</button>
    </div>
  );
}
