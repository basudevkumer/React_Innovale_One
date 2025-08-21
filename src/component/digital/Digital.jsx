import { Col, Container, Image, Row } from "react-bootstrap";
import "./digitals.css";
import ServiceCard from "../commonServiceCard/ServiceCard";
import Circle from "../circleAnimation/Circle";
import Crosses from "../crossAnimation/Crosses";
import Button from "../button/Button";

import CrossImage from "../../assets/cross2.png";
import CommonHpb from "../headParaBtn/CommonHpb";
import DotImageOne from "../../assets/circleDot.png";
import DigitalDotImage from "../../assets/dotOne.png";
import LotusPic from "../../assets/lotus.jpg";
import NaturePic from "../../assets/nature.jpg";
import GoodAfterNoon from "../../assets/goodafternoon.jpg";
import StickImg from "../../assets/stick2.png";
import snakeImage from "../../assets/snake5.png";

const Digital = () => {
  return (
    <section className="digitalMain">
      <Crosses imgSrc={CrossImage} className={"digitalCrossAnimation"} />

      <Container>
        <Row>
          <Col lg={{ span: 5 }}>
            <div className="people">
              <p className="peopleParagraph poppins semiboldPragraph">
                digital experience
              </p>
              <h2 className="heading2 poppins">
                Connect people in digital life
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="digitalMiddlePart">
        <Circle
          size={"121px"}
          top={"-70px"}
          left={"31%"}
          imgSrc={DotImageOne}
          circleImageOhters={"roundAnimationOne"}
          circleImgMainOther={"circleMainOne"}
        />
        <div className="digitalMiddlePartOne">
          <Image src={NaturePic} className=" fluid digitalMiddlePartOneImage" />
        </div>
        <div className="digitalMiddlePartTwo">
          <Image src={StickImg} className="stickImage" />
          <Container>
            <Row>
              <Col lg={8}>
                <div className="digitalChildPartTwoElement">
                  <CommonHpb
                    heading={
                      "More than just an ad agency, we harness the tools of traditional and digital."
                    }
                    paragraph={
                      "With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."
                    }
                    buttonText={"More about us"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="digitalWork">
        <div className="digitalAnimation">
          <Image src={snakeImage} className="digitalSnake" />
          <Image src={DigitalDotImage} className="digitalDotAnimation" />
        </div>
        <Crosses imgSrc={CrossImage} className={"digitalWorkCrossAnimation"} />

        <Container>
          <Row>
            <Col lg={7}>
              <div className="workTexts">
                <p className="poppins semiboldPragraph workTextPragraph">
                  digital experience
                </p>
                <h2 className="heading2 poppins">
                  The hundred of completed works still counting
                </h2>
              </div>
            </Col>

            <Col lg={5}>
              <div className="digitalTrasprButtonMain">
                <Button
                  children={"View all"}
                  className={"digitalTrasprButton"}
                />
              </div>
            </Col>
          </Row>
          <Row className="sCard">
            <Col lg={5}>
              <ServiceCard
                imgSrc={GoodAfterNoon}
                buttonText={"Read more"}
                heading={"Mobile App"}
              />
            </Col>
            <Col lg={7}>
              <ServiceCard
                imgSrc={NaturePic}
                buttonText={"Read more"}
                heading={"Mobile App"}
              />
            </Col>
            <Col lg={7}>
              <ServiceCard
                imgSrc={LotusPic}
                buttonText={"Read more"}
                heading={"Mobile App"}
              />
            </Col>
            <Col lg={5}>
              <ServiceCard
                imgSrc={GoodAfterNoon}
                buttonText={"Read more"}
                heading={"Mobile App"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Digital;
