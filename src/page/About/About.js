import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            src="https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
            alt=""
          />
          <p>
            This a slider wait 25 sec sit amet consectetur adipisicing elit.
            Quisquam
          </p>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
            alt=""
          />
          <p>
            This a slider wait 25 sec sit amet consectetur adipisicing elit.
            Quisquam
          </p>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
            alt=""
          />
          <p>
            This a slider wait 25 sec sit amet consectetur adipisicing elit.
            Quisquam
          </p>
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 160px;
  left: 50px;
  overflow: hidden;
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  a {
    border-radius: 4px;
    width: 433px;
    height: 570px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 433px;
      height: 500px;
      left: 50px;
      top: 1110px;
      object-fit: cover;
      display: flex;
      border-radius: 4px;
      flex-direction: column;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }

  // media query
  @media (max-width: 768px) {
    a {
      border-radius: 9px;
      width: 223px;
      height: 330px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 79%) 0px 16px 10px -10px;
      cursor: pointer;
      display: block;
      position: relative;
      padding: 4px;
      img {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default About;
