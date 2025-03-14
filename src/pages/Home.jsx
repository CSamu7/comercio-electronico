import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import SectionProducts from "../components/SectionProducts";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Home.module.css";

export default function Home() {
  const [width, height] = useWindowSize();

  const IMGS = [
    "https://concepto.de/wp-content/uploads/2019/12/telescopio-e1576107221750.jpg",
    "https://i.blogs.es/0c69af/astrology-astronomy-constellation-2034892/1366_2000.jpg",
  ];

  return (
    <>
      <Header></Header>
      <main>
        <article className={styles.aboutUs}>
          <div className={styles.aboutUsMain}>
            <h2 className={styles.aboutUsTitle}>Infinite Sky</h2>
            <h3>&quot;El cosmo en tus manos&quot;</h3>
            <p>
              Infinite Sky es una tienda en línea especializada en la venta de
              telescopios, accesorios y material astronómico de alta calidad.
              Ofrecemos productos para aficionados y profesionales.
            </p>
          </div>
          <div className={styles.aboutUsImgs}>
            <img
              src="https://skyshop.mx/wp-content/uploads/2021/12/Q76-lateral-1.png"
              className={styles.aboutUsImg}
            ></img>
            <img
              src="https://static.wixstatic.com/media/f533c8_b77b78e13fc041e28bb8a720a85deed9~mv2.png/v1/fill/w_546,h_546,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f533c8_b77b78e13fc041e28bb8a720a85deed9~mv2.png"
              className={styles.aboutUsImg}
            ></img>
            <img
              src="https://static.wixstatic.com/media/6f26e0_b38af477226b441bab690ea3f1863490~mv2.png/v1/fill/w_480,h_470,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6f26e0_b38af477226b441bab690ea3f1863490~mv2.png"
              className={styles.aboutUsImg}
            ></img>
          </div>
        </article>

        {width > 900 && <Carousel imgs={IMGS}></Carousel>}

        <SectionProducts title="Telescopios"></SectionProducts>
        <SectionProducts title="Binoculares"></SectionProducts>
        <SectionProducts title="Filtros"></SectionProducts>
      </main>
      <Footer></Footer>
    </>
  );
}
