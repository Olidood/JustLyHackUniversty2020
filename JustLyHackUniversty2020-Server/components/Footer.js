import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SiteFooter(props){
    return(
        <div>
                <Container className = {"pt-2 pb-2 bg-light " + props.sticktion}>
                    <Row>
                       <Col md={4}><h5>© Команда "JustLy"</h5></Col>
                       <Col md={6}>
                       </Col>
                       <Col md={2}><h5>2020</h5></Col>
                    </Row>
                </Container>
        </div>
    );
}
