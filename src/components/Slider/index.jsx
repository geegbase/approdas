import { useRef, useState } from 'react';
import SliderArrowIcon from '../Icons/SliderArrowIcon';
import { SLIDER_THRESHOLD } from '@/utils/constants';
import styles from '@/styles/Slider.module.scss';

const Slider = ({ product }) => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const handleLeft = () => {
    setIndex((prev) => (index > 0 ? --prev : product.photos.length - 1));
  };

  const handleRight = () => {
    setIndex((prev) => (index < product.photos.length - 1 ? ++prev : 0));
  };

  const handleStatusClick = (idx) => {
    setIndex(idx);
  };

  const handlePointerDown = (e) => {
    startX.current = e.pageX;
  };
  const handlePointerUp = (e) => {
    const diff = Math.abs(e.pageX - startX.current);
    if (diff >= SLIDER_THRESHOLD) {
      const delta = e.pageX - startX.current;
      setIndex((prevState) => {
        if (delta < 0) {
          return prevState < product.photos.length - 1 ? prevState + 1 : 0;
        } else {
          return prevState > 0 ? prevState - 1 : product.photos.length - 1;
        }
      });
    }
  };
  const handlePointerMove = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.slider}>
      <SliderArrowIcon onClick={handleLeft} />
      <SliderArrowIcon onClick={handleRight} />

      <div className={styles.status}>
        {product.photos.map((_, idx) => {
          return (
            <div
              className={`${styles.stat} ${index === idx ? styles.active : ''}`}
              key={idx}
              onClick={() => handleStatusClick(idx)}
            />
          );
        })}
      </div>
      {product.photos.map((slide, idx) => {
        return (
          <div
            className={`${styles.image} ${index === idx ? styles.active : ''}`}
            key={idx}
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <img src={slide} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
