import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  
  useEffect(() => {
    let ignore=false;
    setBio(null);
    fetchBio(person).then(result => {
      (!ignore)&&setBio(result);
    });
    // return ()=>setBio(null); =>이러면 결국 bio를 덮어쓰는 것임. 이럼 안되는 상황 있음.
    return ()=>{ignore=true};
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
