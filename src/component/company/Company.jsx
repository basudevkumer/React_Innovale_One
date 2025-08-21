import { Col, Container, Image, Row } from "react-bootstrap";
import "./company.css";
import Slider from "react-slick";

import CardImageOne from "../../assets/cardimage1.png";
import CardImageTwo from "../../assets/cardimage2.png";
import CardImageThree from "../../assets/cardimage3.png";
import CardImageFour from "../../assets/cardimage4.png";
import CardImageFive from "../../assets/cardimage5.png";
import CardImageSix from "../../assets/cardimage6.png";

const Company = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="company">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            {" "}
            <h2 className="heading2 poppins companyHeading">
              Trusted by top global companies And orginizations
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="companySlider">
              <Slider {...settings}>
                <div>
                  <Image src={CardImageOne} />
                </div>
                <div>
                  <Image src={CardImageTwo} />
                </div>
                <div>
                  <Image src={CardImageThree} />
                </div>
                <div>
                  <Image src={CardImageFour} />
                </div>
                <div>
                  <Image src={CardImageFive} />
                </div>
                <div>
                  <Image src={CardImageSix} />
                </div>
                <div>
                  <Image src={CardImageFour} />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
