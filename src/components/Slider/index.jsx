import { useState } from 'react';
import styles from '@/styles/Slider.module.scss';
import SliderArrowIcon from '../Icons/SliderArrowIcon';

const slides = [
  'https://picsum.photos/1200/1200/?image=299',
  'https://picsum.photos/1200/1200/?image=398',
  'https://picsum.photos/1200/1200/?image=377',
  'https://picsum.photos/1200/1200/?image=196',
  'https://picsum.photos/1200/1200/?image=296',
  'https://picsum.photos/1200/1200/?image=274',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((prev) => (index > 0 ? --prev : slides.length - 1));
  };

  const handleRight = () => {
    setIndex((prev) => (index < slides.length - 1 ? ++prev : 0));
  };

  const handleStatusClick = (idx) => {
    setIndex(idx);
  };
  return (
    <div className={styles.slider}>
      <SliderArrowIcon onClick={handleLeft} />
      <SliderArrowIcon onClick={handleRight} />

      <div className={styles.status}>
        {slides.map((_, idx) => {
          return (
            <div
              className={`${styles.stat} ${index === idx ? styles.active : ''}`}
              key={idx}
              onClick={() => handleStatusClick(idx)}
            />
          );
        })}
      </div>
      {slides.map((slide, idx) => {
        return (
          <div
            className={`${styles.image} ${index === idx ? styles.active : ''}`}
            key={idx}
          >
            <img src={slide} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
