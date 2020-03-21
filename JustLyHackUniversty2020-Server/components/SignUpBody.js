import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Router from "next/Router"
import Link from 'next/link';

export default function SignUpBody(){
  let url = '192.168.0.5';
  const handler = (e) => {
    let login = document.getElementById('inputLogin').value;
    let password = document.getElementById('inputPassword').value;
    let confirmationPassword = document.getElementById('confirmPassword').value;
    let canGoToNext = false;
    if(password == confirmationPassword){
      fetch('http://'+ url +':8080/api/v1/users/signup/'+ login +'/'+ password).then(res => res.json()).then((result) =>{
        if(result.code == 200){
          Router.push({
            pathname: '/signIn',
          })
        }
      },(error)=>{
        canGoToNext = false;
      });
    }else{
        alert("Пароли не совпадают! Проверьте правильность заполнения полей...");
    }
  }

  return(
    <Container style={{marginTop: 20 + 'vh', paddingBottom: 20 + 'vh'}}>
           <Row>
              <Col lg={4}></Col>
              <Col lg={4} className="text-center">
                  <form className = "form-signup">
                    <img src="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" alt="Logo" class = "logo-picture mb-2" width="72" height="72"/>
                    <h3><strong>Регистрация</strong></h3>
                    <input type="login" id = "inputLogin" class = "form-control mb-2" placeholder="Логин" minlength="4"  required autoFocus/>
                    <input type="password" id = "inputPassword" class = "form-control mb-2" placeholder="Пароль" minlength="6"  required autofocus/>
                    <input type="password" id = "confirmPassword" class = "form-control mb-2" placeholder="Повторите пароль" required autofocus/>
                      <a login-input="#inputLogin" password-input="#inputPassword" password-con-input="#confirmPassword" onClick={(e) => handler(e)} style={{'color':'white'}} class="btn btn-lg btn-success btn-block" type="submit">Зарегистрироваться</a>
                    <p style={{'background-color':'white', 'border-radius':'5px'}} className="mt-2">У вас уже есть аккаунт?
                      <Link href="/signIn">
                        <a> Войдите...</a>
                      </Link>
                    </p>
                </form>
              </Col>
              <Col lg={4}></Col>
           </Row>
       </Container>
  );
}
