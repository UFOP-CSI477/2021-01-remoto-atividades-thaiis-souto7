import React, { useCallback, ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import {
  LoginContainer,
  FormContainer,
  ButtonPers,
  FormElement,
  Divisor,
} from './styles';

interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const [login, setLogin] = useState<ILogin>({} as ILogin);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setLogin({ ...login, [name]: value });
    },
    [login, setLogin],
  );

  const handle = useCallback(async () => {
    const response = await api.post('/sessions', {
      email: login.email,
      password: login.password,
    });

    if (response.status === 200) {
      history.push('/adm');
    }
  }, [history, login]);

  return (
    <LoginContainer id="Login">
      <FormContainer id="form">
        <h1>Login</h1>
        <Divisor />
        <h4>Entre para iniciar sua sessão.</h4>
        <FormElement>
          <input
            name="email"
            type="text"
            placeholder="Usuário"
            onChange={handleChange}
          />
        </FormElement>
        <FormElement>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={handleChange}
          />
        </FormElement>

        <ButtonPers type="button" onClick={handle}>
          <h4>ENTRAR</h4>
        </ButtonPers>
      </FormContainer>
    </LoginContainer>
  );
};
export default Login;
