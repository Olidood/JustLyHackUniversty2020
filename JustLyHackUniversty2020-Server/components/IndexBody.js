import Component from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import Link from 'next/link';

function MainCard(props){
  let blockGet, blockGive;
  if(props.logged == "true"){
    blockGet = <Link href="/browseAparts"><Button className='btn-success' size="lg" >Снять!</Button></Link>
    blockGive = <Link href="/indexLogged"><Button className='btn-success' size="lg" >Сдать!</Button></Link>
  }else{
    blockGet = <Link href="/browseAparts"><Button className='btn-success' size="lg" >Снять!</Button></Link>
    blockGive = <Link href="/signIn"><Button className='btn-success' size="lg" >Сдать!</Button></Link>
  }
  return(
    <Container  className='mx-auto my-2 w-100 px-0'>
      <Row>
        <Col lg={3} className="text-center my-auto px-1">
            <Jumbotron style={{'background-color':'#28A746'}}  className="my-2 px-2 py-4">
              {blockGet}
            </Jumbotron>
        </Col>
        <Col lg={6} className="text-center my-auto px-1">
          <Jumbotron style={{'background-color':'rgba(255, 255, 255, .75)'}} className="my-2 px-2 py-4">
            <Container>
              <Row>
                <Col lg={12} className='text-center m-2'>
                  <h3>Снять?! Сдать?! - "<span style={{color:'#28A746'}}>Легко!</span>"</h3>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Col>
        <Col lg={3} className="text-center my-auto px-1">
          <Jumbotron style={{'background-color':'#28A746'}} className="my-2 px-2 py-4 ">
            {blockGive}
          </Jumbotron>
        </Col>
      </Row>
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
        <Col lg={8}  className='p-2' style={{'background-color':'rgba(255, 255, 255, .75)'}}>
          <h3 className='p-2'>{'Легко! - это ' + props.hText }</h3>
        </Col>
      </Row>
    </Container>
  );
}

function RighSidePic(props){
  return(
    <Container className='my-2'>
      <Row>
        <Col lg={8} className='p-2' style={{'background-color':'rgba(255, 255, 255, .75)'}}>
          <h3 className='p-2'>{'Легко! - это ' + props.hText }</h3>
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
          <MainCard logged={this.props.logged}/>
          <LeftSidePic url='https://sun9-22.userapi.com/slcKjeq7xhgWIJLYPuG2Sksnvnq0KJ9aoQbB1Q/S161sUg4PEY.jpg' hText='простой способ быстро найти и снять квартиру!'/>
          <RighSidePic url='https://sun9-42.userapi.com/c5QiacMFqNxf7cAVbiHBNFRpHgysngaUcPPZAg/SXrIyPLsTOQ.jpg' hText='простой способ быстро сдать квартиру!'/>
          <LeftSidePic url='https://sun9-52.userapi.com/46U0a0sZBLjDV7CfgIp-8ZbiZcn7gel5axuDUw/gSfe9kl69rE.jpg' hText='надежность!'/>
        </Container>
      </div>
    );
  }
}
