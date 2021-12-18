import { LoginContainer } from './styles';

export function Login() {
    return (

        <LoginContainer id="login">
            <h2>Login</h2>
            {/* divisor */}
            <h4>Entre para iniciar sua sessão.</h4>
            <input type="text" placeholder="Usuário"/>
            <input type="password" placeholder="Senha"/>
        </LoginContainer>
    );
}
