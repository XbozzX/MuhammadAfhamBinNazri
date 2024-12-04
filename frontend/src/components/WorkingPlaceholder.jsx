import Card from "react-bootstrap/Card";

function WorkingPlaceholder() {
  return (
    <Container className="p-3">
      {/* Row for Deloitte Consulting */}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mx-auto">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Deloitte Consulting (SEA) Sdn. Bhd.</Card.Title>
              <Card.Text className="text-justify">
                Participated in the Digital Operations Program (DOP) project for
                the bank, enhancing productivity by supporting the development
                team in maintaining the SQL code base for Business Intelligence
                Publisher (BIP) reports, thereby enabling stakeholders to make
                more accurate decisions.
                <br />
                <br />
                Participated in the eInvoice project for the bank in Malaysia,
                enhancing productivity and daily operations by supporting the
                development team in maintaining and creating new functions for
                the PL/SQL codebase for the Oracle Enterprise Business Suite
                (EBS) application. Conducted testing based on test cases,
                maintained the end-user documentation guide, and provided user
                training.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Row for Collectius */}
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Collectius</Card.Title>
              <Card.Text className="text-justify">
                Participated in the completion of the first month of One Hundred
                and Forty (140) hours of training physical (face-to-face),
                virtual, and e-learning.
                <br />
                <br />
                Diagnosed and troubleshot technical issues, including account
                setup, PC updates, reinstalling Windows, and maintaining
                hardware.
                <br />
                <br />
                Diagnosed and troubleshot network issues, including checking IP
                addresses, router configurations, and firewall connections.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkingPlaceholder;
