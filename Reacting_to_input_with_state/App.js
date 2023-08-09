import { useState } from "react";

export default function Picture() {
  // 2가지 상태, 트리거는 클릭
  // 각 상태는 서로 배반적. 공존불가 -> state 1개로 가능
  // const pictureHilighted = true;
  const [pictureHilighted, setPictureHilighted] = useState(false);
  const borderClassName = pictureHilighted
    ? {
        backgroundClassName: "background",
        pictureClassName: "picture picture--active"
      }
    : {
        backgroundClassName: "background background--active",
        pictureClassName: "picture"
      };
  function handleClick(e, isPicture) {
    e.stopPropagation();
    // e.target.className = "asdfasdf";
    // console.log(e);
    // const isPicture = true;
    if (isPicture) {
      setPictureHilighted(true);
    } else {
      setPictureHilighted(false);
    }
  }

  return (
    <>
      <div
        className={borderClassName.backgroundClassName}
        onClick={(e) => {
          handleClick(e, false);
        }}
      >
        <img
          className={borderClassName.pictureClassName}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={(e) => {
            handleClick(e, true);
          }}
        />
      </div>
    </>
  );
}
