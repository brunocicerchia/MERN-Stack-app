import { PostList } from "../components/PostsList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import { FcApproval, FcOnlineSupport, FcPrivacy, FcServices, FcDataProtection, FcStatistics } from "react-icons/fc";
import PostContainer from "../context/postContext";

export function HomePage() {

  return (
    <div>
      {/* NavBar */}
      <Navbar expand="lg" variant="dark" style={{backgroundColor: '#030BA6'}}>
      <Container className='navbarColor text'>
        <Navbar.Brand href="#home" className="mr-auto title">PediOnline</Navbar.Brand>
        <Navbar.Toggle className="mr-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" active>Funcionalidades</Nav.Link>
            <Nav.Link href="#link" active>Precios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="outline-light" style={{ margin: '2px'}}>Iniciar sesion</Button>
            <Button style={{ margin: '2px'}}>EMPEZAR GRATIS</Button>            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      {/* Header */}
      <Container fluid className="mainHeader">
        <Container>
          <Row className="align-items-center align-self-center" style={{height: '80vh'}}>
            <Col>
              <h2 style={{fontSize: '72px'}}>Con</h2>
              <h2 style={{fontSize: '72px'}}>PediOnline</h2>
              <h2 style={{fontSize: '72px'}}>Podes:</h2>
              <h3 style={{color: '#05c46b', fontSize: '36px'}}>Aceptar pedidos online</h3>
            </Col>
            <Col className="d-none d-lg-block">
              <Image style={{height: '80vh'}} src="https://res.cloudinary.com/dkxpqwify/image/upload/v1659024404/undraw_barista_507s_e1fqdd.png" fluid/>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Body */}
      <Container className="mainBody" style={{marginTop: "100px"}}>
        <Row className="align-items-center align-self-center">
          <Col>
            <h3 className="title">Maneja todo tu emprendimiento</h3>
            <h4 className="title" style={{color: '#00C565'}}>Desde un solo lugar</h4>
            <ListGroup className="text" variant="flush">
              <ListGroup.Item><FcApproval /> Pedidos online</ListGroup.Item>
              <ListGroup.Item><FcApproval /> Integracion con PedidosYa</ListGroup.Item>
              <ListGroup.Item><FcApproval /> Manejo de stock</ListGroup.Item>
              <ListGroup.Item><FcApproval /> Facturacion online</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Image src="https://res.cloudinary.com/dkxpqwify/image/upload/v1659014036/undraw_online_stats_0g94_i2bw3v.svg" fluid/>
          </Col>
        </Row>
      </Container>
      <Container className="mainBody" style={{marginTop: "100px"}}>
        <Row className="align-items-center align-self-center">
          <Col>
            <Image src="https://res.cloudinary.com/dkxpqwify/image/upload/v1659014036/undraw_mobile_encryption_re_yw3o_aioflr.svg" fluid/>
          </Col>
          <Col>
            <h3 className="title">Mantene al dia la contabilidad</h3>
            <h4 className="title" style={{color: '#00C565'}}>De manera automatica</h4>
            <ListGroup className="text" variant="flush">
              <ListGroup.Item><FcOnlineSupport /> Soporte 24/7 en vivo</ListGroup.Item>
              <ListGroup.Item><FcServices /> 100% Configurable</ListGroup.Item>
              <ListGroup.Item><FcPrivacy /> Servicio encriptado de punta a punta</ListGroup.Item>
              <ListGroup.Item><FcDataProtection /> Backups Diarios de tus datos</ListGroup.Item>
              <ListGroup.Item><FcStatistics /> Estadisticas de tus productos mas vendidos</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}