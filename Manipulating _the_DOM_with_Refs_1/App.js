import { useState, useRef } from 'react';
import {flushSync} from 'react-dom';
export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    isPlaying?myRef.current.pause():myRef.current.play();
    
    // flushSync(()=>{
    //   setIsPlaying(nextIsPlaying);
    // })
    setIsPlaying(nextIsPlaying);
    
    
    
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={myRef}
          onPlay={()=>{setIsPlaying(true)}}
          onPause={()=>{setIsPlaying(false)}}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
