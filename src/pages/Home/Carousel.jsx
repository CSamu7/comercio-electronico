import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ imgs = [] }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.interval = setInterval(onNextImage, 10000);

    return () => clearInterval(window.interval);
  }, []);

  const onNextImage = () => {
    setActiveImg((activeImg) => {
      if (activeImg < imgs.length - 1) {
        return activeImg + 1;
      } else {
        return 0;
      }
    });
  };

  const onPrevImage = () => {
    setActiveImg((activeImg) => {
      if (activeImg > 0) {
        return activeImg - 1;
      } else {
        return imgs.length - 1;
      }
    });
  };

  const imgsElement = imgs.map((img, index) => {
    return (
      <img
        src={img}
        key={index}
        className={`${styles.carouselImg} ${
          index == activeImg && styles.carouselImgActive
        }`}
      ></img>
    );
  });

  return (
    <div className={styles.carousel}>
      <button onClick={onPrevImage} className={styles.btnArrow}>
        <img
          src="arrow_left.png"
          alt="arrow-left"
          className={styles.arrowImg}
        ></img>
      </button>
      {imgsElement}
      <button onClick={onNextImage} className={styles.btnArrow}>
        <img
          src="arrow_right.png"
          alt="arrow-right"
          className={styles.arrowImg}
        ></img>
      </button>
    </div>
  );
}
