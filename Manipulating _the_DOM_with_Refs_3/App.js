import { useState, useRef } from 'react';
// import {flushSync} from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imgsRef = useRef(new Map());
  // const imgRef = useRef(null);

  if(imgsRef.current.size!==0){
    imgsRef.current.get(index).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  
       

  
  return (
    <>
      <nav>
        <button onClick={() => {
           if (index < catList.length - 1) {
                setIndex(index+1);
              } else {
                setIndex(0);
              }  

      
          // flushSync(()=>{
          //    if (index < catList.length - 1) {
          //       setIndex(index+1);
          //     } else {
          //       setIndex(0);
          //     }  
          // });
          
          // imgRef.current.scrollIntoView({
          // behavior: 'smooth',
          // block: 'nearest',
          // inline: 'center'
          // });
          
         
          
          
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            
            <li key={cat.id}>
              <img
                // ref={index===i?imgRef:null}
                ref = {(node)=>{imgsRef.current.set(i, node)}}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

