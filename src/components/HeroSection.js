import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const HeroStyles = styled.div`
  .hero {
    // height: 100vh;
    // min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    img {
      width: 500px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, my name is</span>
            <span className="hero-name">Orawee Chantravutikorn</span>
          </h1>
          <div className="hero-img">
            <img
              src="https://res.cloudinary.com/orawee/image/upload/v1634151541/LRG_DSC04871_tmmos2.jpg"
              alt=""
            />
          </div>
          <div className="hero-info">
            <PText>
              I have a growth mindset and a strong passion for learning. Being
              able to combine logic and creativity to develop and solve problems
              is fun!
            </PText>
            <Button btnLink="/projects" btnText="See my works"/>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
