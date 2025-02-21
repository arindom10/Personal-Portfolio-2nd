import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in building user interfaces using React components
                and libraries.<br></br> Eager to learn and contribute to a
                dynamic front-end team.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development Meter" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Responsive Design Meter" />
                  <h5>Responsive Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity Meter" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design Meter" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="HTML Meter" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="React.Js Meter" />
                  <h5>React.Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="CSS Meter" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Bootstrap Meter" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tailwind CSS Meter" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="JavaScript Meter" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity Meter" />
                  <h5>Testing and Debugging</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background design"
      />
    </section>
  );
};
