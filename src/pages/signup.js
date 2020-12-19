import React, {Fragment, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import AuthForm from "../components/auth-form";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes';

function Signup(props) {
    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    // valid inputs
    const isInvalid = firstName === '' || password === '' || email === '';

    const handleSignUp = (e) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                // Signed in
                res.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((error) => {
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <Fragment>
            <HeaderContainer>
                <AuthForm>
                    <AuthForm.Title>Зарегистрироваться</AuthForm.Title>

                    {error && <AuthForm.Error>{error}</AuthForm.Error>}

                    <AuthForm.Base onSubmit={handleSignUp} method="POST">
                        <AuthForm.Input
                            placeholder="Имя пользователя"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

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
                            Зарегистрироваться
                        </AuthForm.Submit>

                        <AuthForm.Text>
                            Уже зарегистировались?
                            <AuthForm.Link to="/signin"> Войти сейчас</AuthForm.Link>

                        </AuthForm.Text>

                        <AuthForm.SmallText>Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы не
                            бот.</AuthForm.SmallText>
                    </AuthForm.Base>
                </AuthForm>
            </HeaderContainer>

            <FooterContainer/>
        </Fragment>
    );
}

export default Signup;