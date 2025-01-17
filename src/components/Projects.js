import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/10.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const educationData = [
    {
      degree: "Bachelor of Science",
      institution: "Daffodil International University",
      field: "Computer Science and Engineering",
      grade: "3.27 out of 4.00",
      completion: "Graduated in 2022",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government KC College, Jhenaidah",
      field: "Science",
      grade: "4.33 out of 5.00",
      completion: "Completed in 2017",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Kanchannagar Model High School, Jhenaidah",
      field: "Science",
      grade: "5.00 out of 5.00",
      completion: "Completed in 2015",
    },
  ];
  const projects = [
    {
      title: "Furniture Store",
      description: "Design & Development",
      imgUrl: projImg1,
      liveLink: "https://furniro-one-tan.vercel.app/",
    },
    {
      title: "Hotel Booking",
      description: "Design & Development",
      imgUrl: projImg2,
      liveLink: "https://azuredream-lodge.vercel.app/",
    },
    {
      title: "Daily Shopping",
      description: "Design & Development",
      imgUrl: projImg3,
      liveLink: "https://daily-shopping.vercel.app/",
    },
    {
      title: "Clothing Brand",
      description: "Design & Development",
      imgUrl: projImg4,
      liveLink: "https://shopsy-clothing-brand-frontend-design.vercel.app/",
    },
    {
      title: "Food Donation",
      description: "Design & Development",
      imgUrl: projImg5,
      liveLink: "https://m-sc-github-link-30109044.vercel.app/",
    },
    {
      title: "Restaurant for Good Food",
      description: "Design & Development",
      imgUrl: projImg6,
      liveLink: "https://restaurantforgoodfood.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Hey there! I'm Arindom Kundu, a passionate Web Developer
                    based in Dhaka. With a strong love for creating seamless,
                    interactive, and visually stunning web applications, I dive
                    headfirst into every project. My journey into the world of
                    web development began with my fascination for user
                    interfaces and a knack for problem-solving. I specialize in
                    crafting dynamic front-end experiences using React, where I
                    bring designs to life with clean and efficient code. Beyond
                    coding, you'll find me staying up-to-date with the latest
                    front-end trends and exploring ways to optimize user
                    experiences. I thrive in collaborative environments, where I
                    enjoy brainstorming ideas, collaborating on projects, and
                    contributing innovative solutions. When I'm not in front of
                    a screen, I'm likely to be found my passion for coding with
                    the community. I believe in lifelong learning and constantly
                    strive to enhance my skills, delivering the best possible
                    results for every project I work on.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          I have a Team and specialize in, E-commerce,
                          WordPress, Shopify, Woo-commerce, Landing pages,
                          Bigcommerce, Dropshipping, Multivendor, and Wholesale
                          websites, Business Websites, Amazon ALI
                          Express/Alibaba, and eBay Affiliate store sites. Also,
                          I have a Design team to make your work easier.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className="my-5">
                          <h2
                            className="text-center mb-5"
                            style={{ fontWeight: "700" }}
                          >
                            Education Details
                          </h2>
                          <Row className="gy-4">
                            {educationData.map((edu, index) => (
                              <Col xs={12} md={6} lg={4} key={index}>
                                <Card
                                  className="h-100 border-0 shadow-sm"
                                  style={{
                                    backgroundColor: "#f8f9fa",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <Card.Body>
                                    <div
                                      className="py-3 px-4 rounded-top"
                                      style={{
                                        backgroundColor: "#4A90E2",
                                        color: "#ffffff",
                                      }}
                                    >
                                      <Card.Title
                                        style={{
                                          fontSize: "1.25rem",
                                          fontWeight: "bold",
                                          marginBottom: "0",
                                        }}
                                      >
                                        {edu.degree}
                                      </Card.Title>
                                    </div>
                                    <Card.Text className="mt-3">
                                      <strong>Institution:</strong>{" "}
                                      {edu.institution}
                                    </Card.Text>
                                    <Card.Text>
                                      <strong>Field of Study:</strong>{" "}
                                      {edu.field}
                                    </Card.Text>
                                    <Card.Text>
                                      <strong>Grade:</strong> {edu.grade}
                                    </Card.Text>
                                    <Card.Text>
                                      <strong>{edu.completion}</strong>
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      ></img>
    </section>
  );
};
