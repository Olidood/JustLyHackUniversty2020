import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default class  BrowseBody extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }


  render(){
    return(
      <div className="m-2">
        <Container>
          <Row>
            <Col lg={3} style={{'background-color':'rgba(255, 255, 255, .75)'}}>
              <Row>
                <Form className="m-2">
                 <Form.Group controlId="apsPrice" className="border-bottom-1">
                   <Form.Label>Цена</Form.Label>
                   <Row>
                    <Col lg={6}>
                      <Form.Control type="number" placeholder="От" />
                    </Col>
                    <Col lg={6}>
                      <Form.Control type="number" placeholder="До" />
                    </Col>
                   </Row>
                 </Form.Group>

                 <Form.Group controlId="apsRooms">
                   <Form.Label>Число комнат</Form.Label>
                   <Form.Control as="select" placeholder="Выберите">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>Студия</option>
                   </Form.Control>
                 </Form.Group>

                 <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Ищу комнату" />
                 </Form.Group>
                 <Button variant="success" type="submit">
                   Поиск
                 </Button>
                </Form>
              </Row>
            </Col>
            <Col lg={9}>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
