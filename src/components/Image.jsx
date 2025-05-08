import img_not_found from "../assets/imagen_no_encontrada.png";

export default function Image({ url, className }) {
  return (
    <object data={`${url}`} className={`${className}`} type="image/jpeg">
      <img src={img_not_found}></img>
    </object>
  );
}
