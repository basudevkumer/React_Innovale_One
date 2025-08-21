import { Image } from "react-bootstrap";
import "./commonCard.css";

const CommonCard = ({ cardImage, heading, paragraph }) => {
  return (
    <div className="commonCardMain">
      <div className="commonCardImg">
        <Image src={cardImage} className="commonImage" />
      </div>
      <h4 className="heading4 commonCardHeading poppins"> {heading}</h4>
      <p className=" cardParagraph nunito">{paragraph}</p>
    </div>
  );
};

export default CommonCard;
