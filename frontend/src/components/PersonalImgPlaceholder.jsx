import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Afham_sor from "../assets/afham_sor.jpg";

function PersonalImgPlaceholder() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3}>
          <Image src={Afham_sor} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalImgPlaceholder;
