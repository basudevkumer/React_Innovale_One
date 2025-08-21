import { Image } from "react-bootstrap";
import "./servicesCard.css";

const ServiceCard = ({ imgSrc, heading, buttonText }) => {
  return (
    <div className="servicesCardMain">
      <div className="cardImage ">
        <Image src={imgSrc} className="cardServicesImage" />
      </div>
      <div className="servicesHoverObject">
        <h4 className="heading4 poppins">{heading}</h4>
        <a href="#" className=" boldPragraph nunito servicesHoverButtonText">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
