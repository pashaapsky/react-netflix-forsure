import React, {Fragment, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import AuthForm from "../components/auth-form";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes';

function Signin(props) {
    const {firebase} = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    // valid inputs
    const isInvalid = password === '' || email === '';

    const handleSignIn = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch(error => {
                setEmail('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <Fragment>
            <HeaderContainer>
                <AuthForm>
                    <AuthForm.Title>Войти</AuthForm.Title>

                    {error && <AuthForm.Error>{error}</AuthForm.Error>}

                    <AuthForm.Base onSubmit={handleSignIn} method="POST">
                        <AuthForm.Input
                            placeholder="Адрес электронной почты"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <AuthForm.Input
                            placeholder="Пароль"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <AuthForm.Submit disabled={isInvalid} type="submit">
                            Войти
                        </AuthForm.Submit>

                        <AuthForm.Text>
                            Впервые на Netflix?
                            <AuthForm.Link to="/signup"> Зарегистрируйтесь сейчас</AuthForm.Link>

                        </AuthForm.Text>

                        <AuthForm.SmallText>Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы не бот.</AuthForm.SmallText>
                    </AuthForm.Base>
                </AuthForm>
            </HeaderContainer>

            <FooterContainer/>
        </Fragment>
    );
}

export default Signin;