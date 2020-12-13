import React from 'react';
import faqData from '../fixtures/faqs'
import Accordion from "../components/accordion";
import CallForm from "../components/call-form";

function AccordionContainer(props) {
    return (
        <Accordion>
            <Accordion.Title>Распространенные вопросы</Accordion.Title>

            <Accordion.Frame>
                {faqData.map(item => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <CallForm>
                <CallForm.Text>
                    Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
                </CallForm.Text>

                <CallForm.Input placeholder="Адрес электронной почты"/>
                <CallForm.Button>Получить 30 дней в подарок</CallForm.Button>
            </CallForm>
        </Accordion>
    );
}

export default AccordionContainer;