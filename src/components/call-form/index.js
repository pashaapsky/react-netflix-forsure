import React from 'react';
import {Container, Input, Button, Break, Text} from './styles/call-form'

function CallForm({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

CallForm.Input = function CallFormInput({...restProps}) {
    return <Input {...restProps}/>
};

CallForm.Button = function CallFormButton({children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now"/>
        </Button>
    )
};

CallForm.Text = function CallFormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

CallForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
};

export default CallForm;