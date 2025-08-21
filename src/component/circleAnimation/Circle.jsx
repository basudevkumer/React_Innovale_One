import { Image } from "react-bootstrap";
import "./circle.css";

const Circle = ({
  size,
  top,
  left,
  dotSize,
  circleImgMainOther,
  circleImageOhters,
  imgSrc,
  zIndex,
}) => {
  return (
    <div
      className={`${circleImgMainOther} circleImageMain`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        zIndex: zIndex,
      }}
    >
      <Image
        src={imgSrc}
        className={`${circleImageOhters} circleImage`}
        style={{ width: dotSize, height: dotSize }}
      />
    </div>
  );
};

export default Circle;
