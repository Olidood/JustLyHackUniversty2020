import Component from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function MainCard(){
  return(
    <Container fluid='true' className='m-2' >
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <h3>Снять?! Сдать?! - Легко</h3>
              </Row>
              <Row>
                <Col lg={6} className='text-center'>
                  <Button className='btn-success'>Снять!</Button>
                </Col>
                <Col lg={6} className='text-center'>
                  <Button className='btn-success'>Сдать!</Button>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default class  IndexBody extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return(
      <div>
        <Container fluid='true'>
          <MainCard/>
        </Container>
      </div>
    );
  }
}
