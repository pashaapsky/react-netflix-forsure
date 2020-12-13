import React from 'react';
import {Container, Base, Error, Title, Text, SmallText, Link, Input, Submit} from './styles/auth-form'

function AuthForm({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    );
}

AuthForm.Base = function AuthFormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
};

AuthForm.Error = function AuthFormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
};

AuthForm.Title = function AuthFormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

AuthForm.Text = function AuthFormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

AuthForm.SmallText = function AuthFormSmallText({children, ...restProps}) {
    return <SmallText {...restProps}>{children}</SmallText>
};

AuthForm.Input = function AuthFormInput({...restProps}) {
    return <Input {...restProps}/>
};

AuthForm.Link = function AuthFormLink({children, ...restProps}) {
    return <Link {...restProps} >{children}</Link>
};

AuthForm.Submit = function AuthFormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
};

export default AuthForm;