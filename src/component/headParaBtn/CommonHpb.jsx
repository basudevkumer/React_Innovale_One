import "./commonHpb.css";
import Button from "../button/Button";

const CommonHpb = ({ heading, buttonText, paragraph, className }) => {
  return (
    <div className="commonHpbMain">
      <h3 className="heading3 poppins">{heading}</h3>
      <p className="commonPragraph nanito commonHpbParagraph "> {paragraph}</p>
      <Button children={buttonText} className={className} />
    </div>
  );
};

export default CommonHpb;
