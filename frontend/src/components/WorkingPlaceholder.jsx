import Card from "react-bootstrap/Card";

function WorkingPlaceholder() {
  return (
    <div>
      <div className=" p-3 d-flex justify-content-around">
        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Body>
            <Card.Title>Deloitte Consulting (SEA) Sdn. Bhd.</Card.Title>
            <Card.Text className=" text-justify">
              Participated in the Digital Operations Program (DOP) project for
              the bank, enhancing productivity by supporting the development
              team in maintaining the SQL code base for Business Intelligence
              Publisher (BIP) reports, thereby enabling stakeholders to make
              more accurate decisions.
              <br />
              <br />
              Participated in the eInvoice project for the bank in Malaysia,
              enhancing productivity and daily operations by supporting the
              development team in maintaining and creating new functions for the
              PL/SQL codebase for the Oracle Enterprise Business Suite (EBS)
              application. Conducted testing based on test cases, maintained the
              end-user documentation guide, and provided user training.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "33rem" }} className=" bg-dark text-white">
          <Card.Body>
            <Card.Title>Collectius</Card.Title>
            <Card.Text className=" text-justify">
              Participate to complete first month of One Hundred and Forty (140)
              hours of training physical (face-to-face), Virtual & E-Learning.
              <br />
              <br />
              Diagnose and troubleshoot technical issues, including account
              setup, pc update, reinstall window and maintain the hardware.
              <br />
              <br />
              Diagnose and troubleshoot the network issue including check the IP
              address, check the router and firewall connection.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default WorkingPlaceholder;
