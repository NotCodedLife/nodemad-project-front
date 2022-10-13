import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Made with <i class="fa fa-heart green-color"></i> by Nodemads
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
