import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ScooterPic from "../assets/scooterHomeInterface.png";
import RideOnPic from "../assets/RideOnHomeInterface.png";
import OMCPic from "../assets/OMChomeInterface.png";
import IoTpic from "../assets/IoTPic.png";
import TrainPic from "../assets/TrainBookingTicketApp.png";

function ProjectPlaceholder() {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Img
            variant="top"
            src={TrainPic}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Train Ticket Booking App</Card.Title>
            <Card.Text>
              An Online train ticket booking app.
              <br />
              Techs: React, Node.js + Express.js, MongoDB and Render
            </Card.Text>
            <br />
            <br />
            <br />
            <a href="https://train-ticket-booking-tvtc.onrender.com/">
              <Button variant="primary">Details</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Img
            variant="top"
            src={ScooterPic}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>swyft-scooter.io</Card.Title>
            <Card.Text>
              Developed a full-stack web application for a start-up company to
              enhance productivity by implementing a booking management system
              <br />
              Techs: React, Node.js, Express.js, MongoDB and Render
            </Card.Text>
            <br />
            <a href="https://swyft-admin.onrender.com">
              <Button variant="primary">Details</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Img
            variant="top"
            src={IoTpic}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Smart Kitchen Inventory IoT System</Card.Title>
            <Card.Text>
              A final year project to develop kitchen weight grocery inventory
              management system that is able to provide real time information
              for weight of the inventory
              <br />
              Techs: Arduino R3 ATMEGA2560, Load Cell Sensor, HX711 Module,
              Ultrasonic Sensor, Esp32 Wifi Module and Blynk app
            </Card.Text>

            <a href="https://drive.google.com/drive/folders/1jBI-vmda86647YfDL8aly29q4MqljLyr?usp=sharing">
              <Button variant="primary">Details</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
      <div className=" mt-10 d-flex justify-content-around">
        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Img
            variant="top"
            src={RideOnPic}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Technopreneurship Team Project (TTP)</Card.Title>
            <Card.Text>
              A group project to develop mobile application Malaysia’s public
              bus services which is offers helpful features for users on the
              step-by-step directions to any attraction, street, public transit
              station, and any other place that they wish to travel to in order
              <br />
              Techs: React Native, Node,js, Redux Toolkit, Firebase, Google
              Cloud Platform(GCP)
            </Card.Text>
            <br />
            <a href="https://drive.google.com/file/d/13ftVnNmhjGZx4ork6JhzzFYR8zBoLI71/view?usp=sharing">
              <Button variant="primary">Details</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Img
            variant="top"
            src={OMCPic}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>OH MY CODE! Programming competition 2019</Card.Title>
            <Card.Text>
              A group project to develop a desktop application by providing part
              time job to the University student
              <br />
              Techs: Visual Basic and Microsoft Access
            </Card.Text>
            <br />
            <br />
            <br />
            <br />
            <a href="https://drive.google.com/file/d/1l2jDA50Fz6bcaDG_TWFHzatVFEAEEp6u/view?usp=sharing">
              <Button variant="primary">Details</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProjectPlaceholder;
