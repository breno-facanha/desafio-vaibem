import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './FormLogin.css'
function FormLogin () {
  return (
    <div id='divLogin'>
        <Form>
            <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input type="text" name="email" id="exampleEmail" placeholder="Usuario:" />
            </FormGroup>
        {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password </Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Senha:" />
            </FormGroup>
        {' '}
            <Button outline style={{ backgroundColor: '#14f484'}}>Entrar</Button>
        </Form>
    </div>
  );
}

export default FormLogin;