// import form react-Bootstrap
import { Col, Container, Row } from "react-bootstrap";

// import file css
import "./bannar.css";

// import files
import SnakeTwo from "../snakeTwo/SnakeTwo.jsx";
import Button from "../button/Button";
import DotAnimation from "../dotAnimation/DotAnimation.jsx";
import Crosses from "../crossAnimation/Crosses.jsx";
import PlateAnimation from "../plateAnimation/PlateAnimation.jsx";

// import images

import CardImageOne from "../../assets/card1.png";
import CardImageTwo from "../../assets/card2.png";
import CardImageThree from "../../assets/card3.png";

// import images animation related

import Circle from "../circleAnimation/Circle";
import DotImageOne from "../../assets/circleDot.png";
import DotImageTwo from "../../assets/dotOne.png";
import DotImageThree from "../../assets/dot4.png";
import DotImageFour from "../../assets/dot5.png";
import DotImageFive from "../../assets/dot6.png";
import DotImageSeve from "../../assets/dot8.png";
import DotImageEight from "../../assets/dot9.png";
import CrossImg1 from "../../assets/cross1.png";
import CrossImg2 from "../../assets/cross2.png";
import SnakeImageOne from "../../assets/snake2.png";
import SnakeImageTwo from "../../assets/snake3.png";
import PlateImgOne from "../../assets/plateOne.png";
import PlateImgTwo from "../../assets/plateThree.png";
import CommonCard from "../CommonCard/CommonCard.jsx";

const Bannar = () => {
  return (
    <>
      <section className="bannar">
        {/* here animation tags included */}

        {/* circle round animations */}

        <Circle
          size={"121px"}
          top={"13px"}
          left={"44%"}
          imgSrc={DotImageOne}
          circleImageOhters={"roundAnimationOne"}
          circleImgMainOther={"circleMainOne"}
        />
        <Circle
          size={"121px"}
          top={"73px"}
          left={"96%"}
          imgSrc={DotImageOne}
          circleImageOhters={"roundAnimationOne"}
          circleImgMainOther={"circleMainTree"}
        />
        <Circle
          size={"238px"}
          top={"520px"}
          left={"176px"}
          imgSrc={DotImageTwo}
          circleImageOhters={"roundAnimationTwo"}
          circleImgMainOther={"circleMainTwo"}
          dotSize={"140px"}
        />
        {/* cross animations */}
        <Crosses imgSrc={CrossImg1} top={"20px"} left={"220px"} />
        <Crosses imgSrc={CrossImg2} top={"256px"} left={"72% "} />
        <Crosses
          imgSrc={CrossImg2}
          top={"74%"}
          left={"54%"}
          className={"crossAnimationsThree"}
        />
        <Crosses
          imgSrc={CrossImg2}
          top={"56%"}
          left={"140px"}
          className={"crossAnimationsThree"}
        />
        {/* snake animations */}
        <SnakeTwo
          imgSrc={SnakeImageOne}
          height={"313px"}
          width={"478px"}
          top={"141px"}
          left={"5%"}
        />

        <SnakeTwo
          imgSrc={SnakeImageTwo}
          top={`32%`}
          left={`102%`}
          className={"SnakeAnimationThree"}
        />
        {/* dot animations */}

        <DotAnimation
          imgSrc={DotImageThree}
          width={"150px"}
          height={"150px"}
          top={"70%"}
          left={"90%"}
          className={"dotAnimationFour"}
        />
        <DotAnimation
          imgSrc={DotImageFour}
          width={""}
          height={""}
          top={"15%"}
          left={"59%"}
          className={"dotAnimationFive"}
        />
        <DotAnimation
          imgSrc={DotImageFive}
          width={"22px"}
          height={"22px"}
          top={"18%"}
          left={"23%"}
          className={"dotAnimationSix"}
        />
        {/* <DotAnimation
        imgSrc={DotImageSix}
        width={"22px"}
        height={"22px"}
        top={"18%"}
        left={"23%"}
        className={"dotAnimationSixOther"}
      /> */}
        <DotAnimation
          imgSrc={DotImageSeve}
          width={""}
          height={""}
          top={"73%"}
          left={"32%"}
          className={"dotAnimationSeven"}
        />
        {/* plate animation */}

        <PlateAnimation
          imgSrc={PlateImgOne}
          top={"73%"}
          left={"90%"}
          width={"350px"}
          height={"350px"}
          className={"plateAnimationOne"}
        />

        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="bannarTextElements">
                <h1 className="heading1 ">We are a full range design agency</h1>
                <p className="commonPragraph bannarPragraph">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
                <div className="bannarButton">
                  <Button children={"Contact us"} />
                  <Button children={"showcase"} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bannarCardSection">
        <DotAnimation
          imgSrc={DotImageEight}
          width={"291px"}
          height={"289px"}
          top={"18%"}
          left={"-8%"}
          className={"DotImageEights"}
        />

        {/* <PlateAnimation imgSrc={PlateImgTwo} width={"91px"} height={"91px"} top={"-274%"} left={"-1%"} className={"plateAnimationTwo"}/> */}
        <Container>
          <Row>
            <Col lg={4}>
              <div className="bannarCards">
                <CommonCard
                  cardImage={CardImageOne}
                  paragraph={
                    "Nam libero tempore, cum soluta nobis est eligendi optio cumque "
                  }
                  heading={"Grow your business"}
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="bannarCards">
                <CommonCard
                  cardImage={CardImageTwo}
                  paragraph={
                    "Nam libero tempore, cum soluta nobis est eligendi optio cumque "
                  }
                  heading={"Grow your business"}
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="bannarCards">
                <CommonCard
                  cardImage={CardImageThree}
                  paragraph={
                    "Nam libero tempore, cum soluta nobis est eligendi optio cumque "
                  }
                  heading={"Grow your business"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Bannar;
