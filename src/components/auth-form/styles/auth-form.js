import styled from "styled-components/macro";
import {NavLink as ReactRouterLink} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 450px;
    min-height: 660px;
    
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    
    padding: 60px 68px 40px;
    margin: auto;
    margin-bottom: 100px;
`;

export const Error = styled.div`
    font-size: 14px;
    
    background: #e87c03;
    
    color: white;
    
    border-radius: 4px;
    
    margin: 0 0 16px;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    
    max-width: 450px;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const SmallText = styled.p`
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
    
    margin-top: 10px;
`;

export const Link = styled(ReactRouterLink)`
    color: #fff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    height: 50px;
    background: #333;
    
    border-radius: 4px;
    border: 0;
    
    color: #fff;
    line-height: 50px;
    
    padding: 5px 20px;
    margin-bottom: 20px;
    
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Submit = styled.button`
    font-size: 16px;
    font-weight: bold;
    
    background: #e50914;
    border-radius: 4px;
    
    margin: 24px 0 12px;
    padding: 16px;
    
    border: 0;
    
    color: white;
    
    cursor: pointer;
    
    &:disabled {
        opacity: 0.5;
    }
`;
