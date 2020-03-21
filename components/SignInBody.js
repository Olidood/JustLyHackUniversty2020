import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Index from "../pages/index";
import Form from "react-bootstrap/Form";
import Link from 'next/link';
import Router from "next/router";
import Component from "react";

export default class SignInBody extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    const handler = (e) => {
      var login = document.getElementById('inputLogin').value;
      let password = document.getElementById('inputPassword').value;
      fetch('http://192.168.43.201:8080/api/v1/userModules/signIn/'+ login +'/'+ password).then(res => res.json()).then((result) =>{
        if(result.code == 200){
          Router.push({
            pathname: '/index',
            search: '?query='+login,
            state: { userLogin: login }
          })
        }else{
          alert("Неправильный логин или пароль!");
        }
      },(error)=>{
      });
    }


    return(
      <Container style={{marginTop: 20 + 'vh', paddingBottom: 25 + 'vh'}}>
             <Row>
                <Col lg={4}></Col>
                <Col lg={4} className="text-center">
                    <form className = "form-signin">
                      <img src="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" alt="Logo" className = "logo-picture mb-2" width="72" height="72"/>
                      <h3><strong >Вход</strong></h3>
                      <input type="login" id = "inputLogin" class = "form-control mb-2" placeholder="Логин" required autoFocus></input>
                      <input type="password" id = "inputPassword" class = "form-control mb-2" placeholder="Пароль" required autofocus></input>
                        <a login-input="#inputLogin" password-input="#inputPassword" onClick={(e) => handler(e)} style={{'color':'white'}} class="btn btn-lg btn-success btn-block" type="submit">Войти</a>
                      <p style={{'background-color':'white', 'border-radius':'5px'}} className="mt-2">У вас ещё нет аккаунта?
                        <Link href="/signUp">
                          <a> Зарегистрируйтесь...</a>
                        </Link>
                      </p>
                  </form>
                </Col>
                <Col lg={4}></Col>

             </Row>
        </Container>
     );
  }
}
