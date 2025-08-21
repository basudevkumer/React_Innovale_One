import { Col, Container, Image, Row } from "react-bootstrap";
import "./footer.css";
import FooterLogo from "../../assets/navLogo.png";
import Button from "../button/Button";
import SnakeAnimationOne from "../snakeOne/SnakeAnimationOne";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerTopPart">
        <SnakeAnimationOne
          snakeOneClassName={"snakeOne"}
          dotOneClassName={"dotOne"}
        />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="footerTopPartElement">
                <div>
                  <p className="commonPragraph poppins">Lets talk</p>
                  <h2 className="heading2 poppins">Got a project?</h2>
                </div>

                <Button children={"Contact Us"} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="footerDivider"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 11 }}>
              <p className="commonPragraph">
                As a leading digital platform in Paris, we look to engage with
                our clients beyond the conventional design and development
                agency relationship, becoming a partner to the people and
                companies we work with.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerBottomPart">
        <Container>
          <Row className="middle">
            <Col lg={{ span: 4 }}>
              <div className="footerBottomTopPart">
                <div className="navImgMain">
                  <Image src={FooterLogo} className="  commonImage" />
                </div>
                <p className="nunito commonPragraph">
                  Install any demo or template with a single click. You can mix
                  and match all the demos & templates. Every demo can be turned
                  into one or multi-page.
                </p>
              </div>
            </Col>
            <Col lg={{ span: 2 }}>
              <div className="footerMiddlePart">
                <h5 className="heading5 middlePartHeadingOne">Features</h5>
                <div className="middlePartPragraph">
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Benifit</a>
                    </li>
                    <li>
                      <a href="">Pricing</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }}>
              <div className="footerMiddlePartTwo">
                <h5 className="heading5 middlePartHeadingTwo ">Products</h5>
                <ul className="middlePartPragraphTwo">
                  <li>
                    <a href="">Task Management</a>
                  </li>
                  <li>
                    <a href="">Company growth</a>
                  </li>
                  <li>
                    <a href="">Time tracking</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }}>
              <div className="footerlastPart">
                <h5 className="heading5 lastPartHeading ">Products</h5>
                <ul className="lastPartPragraph">
                  <li>
                    <a href=""> Customer service</a>
                  </li>
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="bottom">
            <Col lg={{ span: 4 }}>
              <p className="commonPragraph nunito">
                @20201 Innovate.All rights reserved.
              </p>
            </Col>
            <Col lg={{ span: 4, offset: 4 }}>
              <div className="footerRules">
                <ul className="footerRulesElement">
                  <li className="commonPragraph nunito">Privacy policy</li>
                  <li className="commonPragraph nunito">Terms & condition</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
