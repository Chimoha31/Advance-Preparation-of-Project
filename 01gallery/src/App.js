import React, { useState } from "react";
import data from "./data/images.json";
import Modal from "./components/Modal";

const App = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    // 4枚目以上になったら
    if (currentIndex + 1 > totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
          <img
            src={item.link}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2>{item.text}</h2>
        </div>
      ))}
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          setClickedImg={setClickedImg}
        />
      )}
    </div>
  );
};

export default App;
