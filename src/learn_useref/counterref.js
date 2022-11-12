import { useState, useEffect, useRef } from "react";

export default function CounterRef() {
  const [,setClick] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleClick = () => {
    setClick(count.current);
  };

  return (
    <div className="Main">
      <button style={{ background: '#58d8d8', padding: 20, }} onClick={handleClick}>
        Click to add counter
      </button>
      <h3>Render Count: {count.current}</h3>
    </div>
  );
}