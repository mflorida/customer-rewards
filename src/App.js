import { Container, Row, Col } from 'react-bootstrap';
import { CustomerTable } from './components/CustomerTable';

export default function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <h2 className={'text-white'} style={{ margin: '20px auto 10px', textAlign: 'center' }}>
            Customer Rewards Data
          </h2>
        </Row>
        <Row style={{ margin: 0 }}>
          <p className={'text-white'} style={{ margin: '0 auto 20px', textAlign: 'center' }}>
            Click the 'details' links to reveal rewards data per customer per month.
          </p>
        </Row>
        {/*<Row style={{ borderBottom: '1px solid #ccc' }}/>*/}
        <Row style={{ paddingTop: '20px' }}>
          <Col style={{ padding: 0 }}>

            <CustomerTable/>

          </Col>
        </Row>
      </Container>

    </div>
  );
}
