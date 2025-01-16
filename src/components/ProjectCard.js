import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="img-fluid" />
        <div className="proj-txtx text-center">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-3">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark">Live Link</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
