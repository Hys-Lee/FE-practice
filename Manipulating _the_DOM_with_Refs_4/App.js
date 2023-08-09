import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';
import {useRef} from 'react';


export default function Page() {
  const myRef = useRef(null);
  return (
    <>
      <nav>
        <SearchButton onFocus={()=>{myRef.current.focus()}} />
      </nav>
      <SearchInput ref={myRef}/>
    </>
  );
}
