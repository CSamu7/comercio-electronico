import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1713460001"
        className={styles.logoImg}
      />
    </div>
  );
}
