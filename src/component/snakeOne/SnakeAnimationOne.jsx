import { Image } from "react-bootstrap";
import "./snakeAnimationOne.css";
import SnakeOneImage from "../../assets/snakeOne.png";
import DotOneImage from "../../assets/dotOne.png";

const SnakeAnimationOne = ({ snakeOneClassName, dotOneClassName }) => {
  return (
    <>
      <div className={`${snakeOneClassName}`}>
        <Image src={`${SnakeOneImage}`} className="commonImage" />
      </div>
      <div className={`${dotOneClassName}`}>
        <Image src={DotOneImage} className="commonImage" />
      </div>
    </>
  );
};

export default SnakeAnimationOne;
