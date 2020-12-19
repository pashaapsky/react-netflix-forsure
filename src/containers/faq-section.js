import React from 'react';
import faqData from '../data/faqs'
import FAQSection from "../components/faq-section";
import CallForm from "../components/call-form";

function FAQSectionContainer(props) {
    return (
        <FAQSection>
            <FAQSection.Title>Распространенные вопросы</FAQSection.Title>

            <FAQSection.Frame>
                {faqData.map(item => (
                    <FAQSection.Item key={item.id}>
                        <FAQSection.Header>{item.header}</FAQSection.Header>
                        <FAQSection.Body>{item.body}</FAQSection.Body>
                    </FAQSection.Item>
                ))}
            </FAQSection.Frame>

            <CallForm>
                <CallForm.Text>
                    Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
                </CallForm.Text>

                <CallForm.Input placeholder="Адрес электронной почты"/>
                <CallForm.Button>Получить 30 дней в подарок</CallForm.Button>
            </CallForm>
        </FAQSection>
    );
}

export default FAQSectionContainer;