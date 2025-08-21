import { Image } from "react-bootstrap";
import "./cross.css";

const Crosses = ({ className, size, top, left, imgSrc }) => {
  const settings = {
    width: size,
    height: size,
    top: top,
    left: left,
    position:"absolute"
  };

  return (
    <Image
      className={`${className} corssAnimation`}
      src={imgSrc}
      style={{ ...settings }}
    />
  );
};

export default Crosses;
