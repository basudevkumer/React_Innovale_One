import { Col, Container, Image, Row } from "react-bootstrap";
import "./workCount.css";
import Button from "../button/Button";
import SnakeImage from "../../assets/snake6.png";
import Circle from "../circleAnimation/Circle";
import DotImageOne from "../../assets/circleDot.png";
import DotImgTwo from "../../assets/dot5.png";


const WorkCount = () => {
  return (
    <section className="workCount">
      <Image className="snakeAnimationSameBehiend" src={SnakeImage} />
      <Circle
        size={"150px"}
        top={"290px"}
        left={"2%"}
        imgSrc={DotImageOne}
        circleImageOhters={"roundAnimationOne workCardCircle"}
        circleImgMainOther={"circleMainOne"}
      />
      <Image src={DotImgTwo} className="cardDotAnimation" />
      <Container>
        <Row className="workCountRow">
          <Col lg={{ span: 5 }}>
            <Container>
              <Row className="workCountCardRow">
                <Col lg={6} sm={6} xs={6}>
                  <div className="workCountCard">
                    <h2 className="poppins workCountCardHeading">19+</h2>
                    <p className="commonPragraph nunito">Total top service</p>
                  </div>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                  <div className="workCountCard">
                    <h2 className="poppins workCountCardHeading">27+</h2>
                    <p className="commonPragraph nunito">Total top service</p>
                  </div>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                  <div className="workCountCard">
                    <h2 className="poppins workCountCardHeading">98%</h2>
                    <p className="commonPragraph nunito">Total top service</p>
                  </div>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                  <div className="workCountCard">
                    <h2 className="poppins workCountCardHeading">1,458</h2>
                    <p className="commonPragraph nunito">Usual users</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <div className="workCountRightPart">
              <h2 className="heading2 poppins">
                The hundred of completed works still counting
              </h2>
              <p className="nunito commonPragraph workCountRightPartPragraph">
                Through strategy, design, and planning we build brand identities
                that connect with your Nesi. We then fine-tune a marketing plan
                that allows us to laser focus and target your audience through
                the right channels.
              </p>

              <Button children={"More about us"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkCount;
