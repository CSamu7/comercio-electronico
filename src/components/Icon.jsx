export default function Icon({ name, color, size = 20, url, className }) {
  return (
    <svg fill={color} width={size} height={size} className={className}>
      <use xlinkHref={url}></use>
    </svg>
  );
}
