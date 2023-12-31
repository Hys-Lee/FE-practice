import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export default function Page() {
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  // init. rendering
  useEffect(() => {
    let ignore = false;
    fetchData(`/planets`).then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  // planet choosen
  useEffect(()=>{
    if (planetId===""){
      return ;
    }  // customHook안 쓴다면 이렇게 하자. less nested되게.
    // 가능하다면 customHook을 사용하래. 코드 반복도 적고 깔끔하데.
    // 이상적으로는 최대한 Effect가 적게 보이게 customHook을 적극적으로 써야 한데.
    
    let ignore=false;
    
    // if (planetId!==""){
      fetchData(`/planets/${planetId}/places`).then(result=>{
        if(!ignore){
          setPlaceList(result);
          setPlaceId(result[0].id);
        }
      });  
    // }
    

    
    return ()=>{ignore=true;};
  }, [planetId]);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
          
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}
