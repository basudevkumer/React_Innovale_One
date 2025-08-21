import "./button.css";

const Button = ({ className, children }) => {
  return (
    <a href="#" className={`${className} commonBtn nunito boldPragraph`}>
      {children}
    </a>
  );
};

export default Button;
