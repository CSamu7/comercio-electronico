import styles from "./Carousel.module.css";

export default function Carousel({ images = [] }) {
  return (
    <div className={styles.carousel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
        className={styles.arrow}
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
      <img
        src="https://i.blogs.es/0c69af/astrology-astronomy-constellation-2034892/1366_2000.jpg"
        className={styles.carouselImg}
      ></img>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
        className={`${styles.arrow} ${styles.arrowRight}`}
      >
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    </div>
  );
}
