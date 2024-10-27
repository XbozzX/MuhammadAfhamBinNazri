import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function ProjectPlaceholder() {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>swyft-scooter.io</Card.Title>
            <Card.Text className=" ">
              Developed a full-stack web application for a start-up company to
              enhance productivity by implementing a booking management system
              Techs: React, Node.js, Express.js, MongoDB and Render
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Technopreneurship Team Project (TTP)</Card.Title>
            <Card.Text>
              A group project to develop mobile application Malaysia’s public
              bus services which is offers helpful features for users on the
              step-by-step directions to any attraction, street, public transit
              station, and any other place that they wish to travel to in order
              Techs: React Native, Node,js, Redux Toolkit, Firebase, Google
              Cloud Platform(GCP)
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}
      </div>
      <div className=" mt-10 d-flex justify-content-around">
        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>OH MY CODE! Programming competition 2019</Card.Title>
            <Card.Text>
              A group project to develop a desktop application by providing part
              time job to the University student Techs: Visual Basic and
              Microsoft Access
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Smart Kitchen Inventory IoT System</Card.Title>
            <Card.Text>
              A group project to develop a desktop application by providing part
              time job to the University student Techs: Arduino R3 ATMEGA2560,
              Load Cell Sensor, HX711 Module, Ultrasonic Sensor, Esp32 Wifi
              Module and Blynk app
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProjectPlaceholder;
