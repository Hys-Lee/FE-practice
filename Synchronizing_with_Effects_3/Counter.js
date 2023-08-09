import { useState, useEffect, useRef } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const clockRef = useRef(null);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    clockRef.current = setInterval(onTick, 1000);
    return ()=>{clearInterval(clockRef.current)};
  }, []);

  return <h1>{count}</h1>;
}
