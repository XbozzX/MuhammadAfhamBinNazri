import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Afham_sor from "../assets/afham_sor.jpg";

function PersonalImgPlaceholder() {
  return (
    <div className=" center">
      <Container>
        <Row className=" justify-content-center">
          <Col
            xs={6}
            md={3}
            className=" d-flex justify-content-center align-items-center"
          >
            <Image src={Afham_sor} thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalImgPlaceholder;
