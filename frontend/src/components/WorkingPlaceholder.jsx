import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function WorkingPlaceholder() {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Deloitte Consulting (SEA) Sdn. Bhd.</Card.Title>
            <Card.Text className=" text-justify">
              <ul>
                <li>
                  Participated in the Digital Operations Program (DOP) project
                  for the bank, enhancing productivity by supporting the
                  development team in maintaining the SQL code base for Business
                  Intelligence Publisher (BIP) reports, thereby enabling
                  stakeholders to make more accurate decisions.
                </li>
                <br />
                <li>
                  Participated in the eInvoice project for the bank in Malaysia,
                  enhancing productivity and daily operations by supporting the
                  development team in maintaining and creating new functions for
                  the PL/SQL codebase for the Oracle Enterprise Business Suite
                  (EBS) application. Conducted testing based on test cases,
                  maintained the end-user documentation guide, and provided user
                  training.
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "33rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Collectius</Card.Title>
            <Card.Text className=" text-justify">
              <ul>
                <li>
                  Participate to complete first month of One Hundred and Forty
                  (140) hours of training physical (face-to-face), Virtual &
                  E-Learning.
                </li>
                <li>
                  Diagnose and troubleshoot technical issues, including account
                  setup, pc update, reinstall window and maintain the hardware.
                </li>
                <li>
                  Diagnose and troubleshoot the network issue including check
                  the IP address, check the router and firewall connection.
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
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
  );
}

export default WorkingPlaceholder;
