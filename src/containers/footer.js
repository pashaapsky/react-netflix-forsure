import React from 'react';
import Footer from "../components/footer";

function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Есть вопросы? Свяжитесь с нами.</Footer.Title>

            <Footer.Break />

            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Распространенные вопросы</Footer.Link>
                    <Footer.Link href="#">Для инвесторов</Footer.Link>
                    <Footer.Link href="#">Конфиденциальность</Footer.Link>
                    <Footer.Link href="#">Проверка скорости</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Центр поддержки</Footer.Link>
                    <Footer.Link href="#">Вакансии</Footer.Link>
                    <Footer.Link href="#">Настройка файлов cookie</Footer.Link>
                    <Footer.Link href="#">Юридические уведомления</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Аккаунт</Footer.Link>
                    <Footer.Link href="#">Способы просмотра</Footer.Link>
                    <Footer.Link href="#">Корпоративная информация</Footer.Link>
                    <Footer.Link href="#">Оригинальные контент Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Медиа центр</Footer.Link>
                    <Footer.Link href="#">Правила использования</Footer.Link>
                    <Footer.Link href="#">Свяжитесь с нами</Footer.Link>
                </Footer.Column>
            </Footer.Row>

            <Footer.Break />

            <Footer.Text href="https://github.com/pashaapsky" target="_blank">pashaapsky@2020</Footer.Text>
        </Footer>
    );
}

export default FooterContainer;