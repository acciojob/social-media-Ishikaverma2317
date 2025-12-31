import { useState } from 'react';

export default function ReactionButtons() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const handleClick = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  return (
    <div>
      {counts.map((count, i) => (
        <button key={i} onClick={() => handleClick(i)}>{count}</button>
      ))}
      <button>0</button> {/* fifth button doesn't change */}
    </div>
  );
}
