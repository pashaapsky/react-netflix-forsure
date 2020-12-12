import React from 'react';
import {Container, Base, Error, Title, Text, SmallText, Link, Input, Submit} from './styles/sing-in-form'

function SingInForm({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    );
}

SingInForm.Base = function SignInFormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
};

SingInForm.Error = function SignInFormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
};

SingInForm.Title = function SignInFormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

SingInForm.Text = function SignInFormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

SingInForm.SmallText = function SignInFormSmallText({children, ...restProps}) {
    return <SmallText {...restProps}>{children}</SmallText>
};

SingInForm.Input = function SignInFormInput({...restProps}) {
    return <Input {...restProps}/>
};

SingInForm.Link = function SignInFormLink({children, ...restProps}) {
    return <Link {...restProps} >{children}</Link>
};

SingInForm.Submit = function SignInFormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
};

export default SingInForm;