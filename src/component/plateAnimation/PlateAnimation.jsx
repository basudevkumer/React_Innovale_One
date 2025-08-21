import { Image } from "react-bootstrap";
import "./plateAnimation.css";

const PlateAnimation = ({ imgSrc, className, width, height, top, left }) => {
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
      className={`${className} plateCommonAnimation`}
    />
  );
};

export default PlateAnimation;
