import { Image } from "react-bootstrap";
import "./snakeTwo.css";

const SnakeTwo = ({ className, imgSrc, width, height, top, left }) => {
  const snakeAnimationSettings = {
    width: width,
    height: height,
    top: top,
    left: left,
  };
  return (
    <Image
      className={`${className} snakeCommonCss `}
      style={{ ...snakeAnimationSettings }}
      src={imgSrc}
    />
  );
};

export default SnakeTwo;
