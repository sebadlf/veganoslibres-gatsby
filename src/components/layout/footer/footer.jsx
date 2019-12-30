import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className="py-4 bg-dark text-white-50">
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <a className="fb-ic">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} className="fa-lg white-text ml-md-5 ml-3 fa-2x" />
          </a>
          <a className="tw-ic">
            <FontAwesomeIcon icon={["fab", "twitter"]} className="fa-lg white-text ml-md-5 ml-3 fa-2x" />
          </a>
          <a className="ins-ic">
            <FontAwesomeIcon icon={["fab", "instagram"]} className="fa-lg white-text ml-md-5 ml-3 fa-2x" />
          </a>
          <a className="pin-ic">
            <FontAwesomeIcon icon={["fab", "pinterest"]} className="fa-lg white-text ml-md-5 ml-3 fa-2x" />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
