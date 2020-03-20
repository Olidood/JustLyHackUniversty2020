import Component from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



function MainCard(){
  return(
    <Container  className='mx-auto my-2 w-50'>
      <Jumbotron style={{'background-color':'white'}} className="my-2 px-4 py-4">
        <Container>
          <Row>
            <Col lg={12} className='text-center m-2'>
              <h3>Снять?! Сдать?! - "<span style={{color:'#28A746'}}>Легко!</span>"</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='text-center p-2'>
              <Button className='btn-success'>Снять!</Button>
            </Col>
            <Col lg={6} className='text-center p-2'>
              <Button className='btn-success'>Сдать!</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
}

function LeftSidePic(props){
  return(
    <Container className='my-2'>
      <Row>
        <Col lg={4} className='p-2'>
          <Image src={props.url} fluid rounded/>
        </Col>
        <Col lg={8}  className='p-2' style={{'background-color':'white'}}>
          <h3 className='p-2'>{'Легко! - это' + props.hText }</h3>
        </Col>
      </Row>
    </Container>
  );
}

function RighSidePic(props){
  return(
    <Container className='my-2'>
      <Row>
        <Col lg={8} className='p-2' style={{'background-color':'white'}}>
          <h3 className='p-2'>{'Легко! - это' + props.hText }</h3>
        </Col>
        <Col lg={4} className='p-2'>
          <Image src={props.url} fluid rounded/>
        </Col>
      </Row>
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
          <LeftSidePic url='https://sun9-22.userapi.com/slcKjeq7xhgWIJLYPuG2Sksnvnq0KJ9aoQbB1Q/S161sUg4PEY.jpg' hText='простой способ быстро найти и снять квартиру!'/>
          <RighSidePic url='https://sun9-42.userapi.com/c5QiacMFqNxf7cAVbiHBNFRpHgysngaUcPPZAg/SXrIyPLsTOQ.jpg' hText='простой способ быстро сдать квартиру!'/>
          <LeftSidePic url='https://sun9-22.userapi.com/fWQilUyld3jHETWWxsHxGHcPm_9--ErwS2KN3A/VdccgdPsAQ8.jpg' hText='надежность!'/>
        </Container>
      </div>
    );
  }
}
