import React, {useState, useContext, createContext} from 'react';
import {Container, Inner, Title, Frame, Item, Header, Body} from './styles/faq-section'

const ToggleContext = createContext();

function FAQSection({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

FAQSection.Title = function FAQSectionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

FAQSection.Frame = function FAQSectionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
};

FAQSection.Item = function FAQSectionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{
            toggleShow, setToggleShow
        }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )

};

FAQSection.Header = function FAQSectionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return (
        <Header
            onClick={() => setToggleShow(!toggleShow)}
            {...restProps}
        >
            {children}

            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close"/>
            ) : (
                <img src="/images/icons/add.png" alt="Open"/>
            )}
        </Header>
    )
};

FAQSection.Body = function FAQSectionBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default FAQSection;