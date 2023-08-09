import {useRef} from  'react';

export default function Page() {
  const myRef = useRef(null);
  function handleFocus(){
    myRef.current.focus();
  }
  return (
    <>
      <nav>
        <button onClick={handleFocus}>Search</button>
      </nav>
      <input
        ref={myRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
