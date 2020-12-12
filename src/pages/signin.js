import React, {Fragment, useState} from 'react';
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import SingInForm from "../components/sign-in-form";

function Signin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // valid inputs
    const isInvalid = password === '' || email === '';

    console.log(isInvalid);

    const handleSignIn = (e) => {
        e.preventDefault();


    };

    return (
        <Fragment>
            <HeaderContainer>
                <SingInForm>
                    <SingInForm.Title>Войти</SingInForm.Title>

                    {error && <SingInForm.Error>{error}</SingInForm.Error>}

                    <SingInForm.Base onSubmit={handleSignIn} method="POST">
                        <SingInForm.Input
                            placeholder="Адрес электронной почты"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <SingInForm.Input
                            placeholder="Пароль"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <SingInForm.Submit disabled={isInvalid} type="submit">
                            Войти
                        </SingInForm.Submit>

                        <SingInForm.Text>
                            Впервые на Netflix?
                            <SingInForm.Link to="/signup">Зарегистрируйтесь сейчас</SingInForm.Link>

                        </SingInForm.Text>

                        <SingInForm.SmallText>Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы не бот.</SingInForm.SmallText>
                    </SingInForm.Base>
                </SingInForm>
            </HeaderContainer>

            <FooterContainer/>
        </Fragment>
    );
}

export default Signin;