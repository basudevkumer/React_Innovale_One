import { Col, Container, Row } from "react-bootstrap";
import "./comment.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="cardNext" onClick={onClick}>
      {" "}
      <FaChevronRight/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="cardPrev" onClick={onClick}>
      <FaChevronLeft/>
    </div>
  );
}

const Comment = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="commentMain ">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="heading2 poppins">Our customer say</h2>
            <div className="cardimages">
              <div className="cardImagesElement"></div>
              <div className="cardImagesElement"></div>
              <div className="cardImagesElement"></div>
              <div className="cardImagesElement"></div>
            </div>
            <div className="nunito commonPragraph commentCard">
              <Slider {...settings}>
                <div className="commentCardElement">
                  <p className="nunito semiboldPragraph commentCardParagraph">
                    As a leading digital platform in Paris, we look to engage
                    with our clients beyond the conventional design and
                    development agency relationship, becoming a partner to the
                    people and companies we work with.
                  </p>
                  <h3>Jonathon</h3>
                </div>
                <div className="commentCardElement">
                  <p className="nunito semiboldPragraph commentCardParagraph">
                    As a leading digital platform in Paris, we look to engage
                    with our clients beyond the conventional design and
                    development agency relationship, becoming a partner to the
                    people and companies we work with.
                  </p>
                  <h3>Jonathon</h3>
                </div>
                <div className="commentCardElement">
                  <p className="nunito semiboldPragraph commentCardParagraph">
                    As a leading digital platform in Paris, we look to engage
                    with our clients beyond the conventional design and
                    development agency relationship, becoming a partner to the
                    people and companies we work with.
                  </p>
                  <h3>Jonathon</h3>
                </div>
              </Slider>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
           <div className="commentImage">
            
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comment;
