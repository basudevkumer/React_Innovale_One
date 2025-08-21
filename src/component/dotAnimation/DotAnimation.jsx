import { Image } from "react-bootstrap";
import "./dotAnimation.css";

const DotAnimation = ({ imgSrc, height, width, top, left, className }) => {
  const settings = {
    width: width,
    height: height,
    top: top,
    left: left,
  };

  return (
    <Image
      src={imgSrc}
      style={{ ...settings }}
      className={` ${className} commonDotAnimation`}
    />
  );
};

export default DotAnimation;
