/*IMPORT SECTION**/
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
/* APP section */
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <h1>ONLINE GAMES</h1>

        <div className="div-card">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://store-images.s-microsoft.com/image/apps.3830.67331400503068396.8b264c0b-af11-404a-8aa0-c70a070cef10.def2d566-3e4b-44a7-b222-93ea8883c975?q=90&w=480&h=270"
            />
            <Card.Body>
              <Card.Title>Forza Horizon 5</Card.Title>
              <Card.Text>
                Forza Horizon 5 is a racing video game developed by Playground
                Games studio and published by Xbox Game Studios.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.nouvelles-technologies.net/wp-content/uploads/2023/01/le-code-source-de-league-of-legends-est-en-vente.jpeg"
            />
            <Card.Body>
              <Card.Title>League of Legends</Card.Title>
              <Card.Text>
                League of Legends is a free-to-play online battle arena video
                game released in 2009, developed and published by Riot Games.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.dexerto.fr/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/12/08/the-finals-xbox-one-playstation-4.jpg"
            />
            <Card.Body>
              <Card.Title>The Finals</Card.Title>
              <Card.Text>
                The Finals est un jeu vidéo de de tir à la première personne
                développé et publié par Embark Studios, filiale de Nexon.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="form">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
