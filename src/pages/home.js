import React, {Fragment} from 'react';
import JumbotronContainer from "../containers/jumbotron";
import AccordionContainer from "../containers/accordion";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import CallForm from "../components/call-form";
import Feature from "../components/feature";

function Home(props) {
    return (
        <Fragment>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Фильмы, сериалы и многое другое без ограничений.</Feature.Title>
                    <Feature.SubTitle>Смотрите где угодно. Отменить подписку можно в любое время.</Feature.SubTitle>

                    <CallForm>
                        <CallForm.Text>
                            Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
                        </CallForm.Text>

                        <CallForm.Input placeholder="Адрес электронной почты"/>
                        <CallForm.Button>Получить 30 дней в подарок</CallForm.Button>

                        <CallForm.Text>
                            Это предложение предназначено только для новых пользователей.
                        </CallForm.Text>
                    </CallForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer/>

            <AccordionContainer/>

            <FooterContainer/>
        </Fragment>
    );
}

export default Home;