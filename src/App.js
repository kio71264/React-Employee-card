import './App.css';
import FormEntry from './components/FormEntry';
import Welcome from './components/Welcome';
import {Container, Row, Col} from 'react-bootstrap';

function App () {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg="12" md="12" sm="12">
            <Welcome className="welcomeCompo" name="Kiruba Senthilkumar" />
          </Col>
          <Col lg="12" md="12" sm="12">
            <FormEntry />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
