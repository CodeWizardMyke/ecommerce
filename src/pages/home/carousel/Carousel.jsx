import { useEffect, useState, useRef, useCallback } from 'react';
import './carousel.css';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null);

  const sliderRight = useCallback(() => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  }, [images.length]);

  const sliderLeft = useCallback(() => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
  }, [images.length]);

  useEffect(() => {
    if (autoPlay) {
      timeOutRef.current = setTimeout(() => {
        sliderRight();
      }, 10000);
    }

    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [autoPlay, sliderRight]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOutRef.current);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="inner">
        {images.map((item, index) => (
          <div
            className={index === current ? 'carousel-item carousel-item-active' : 'carousel-item'}
            key={index}
          >
            <img src={`/images/advetising/${item.image}`} alt={item.title} />
          </div>
        ))}
        <div className="carousel-arrow-left" onClick={sliderLeft}>
          &lsaquo;
        </div>
        <div className="carousel-arrow-right" onClick={sliderRight}>
          &rsaquo;
        </div>
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              className={index === current ? 'pagination-dot pagination-dot-active' : 'pagination-dot'}
              key={index}
              onClick={() => {
                setCurrent(index);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
