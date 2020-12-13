import styled from "styled-components/macro";
import {NavLink as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Frame = styled.div`
    
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 56px;
    height: 100px;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;


export const Feature = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 36%;
    
    padding: 200px 0 500px 0;    
        
    @media (max-width: 1100px) {
        display: none;
    }
    
    img {
        height: 175px;
        min-height: 13.2vw;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;

    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    
    font-size: 15px;
    text-decoration: none;
    
    width: fit-content;
    height: fit-content;
    
    color: white;
    
    border: 0;
    border-radius: 3px;
    
    background-color: #e50914;
    
    padding: 8px 17px;
    
    cursor: pointer;
    
    &:hover {
        background: #f40612;
    }
`;


export const Text = styled.p`
    color: white;
    font-size: 1.4vw;
    font-weight: 400;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);    
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    
    margin: 0;
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    
    transition: all 0.3ms linear;
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    height: 30px;
    width: ${({ active }) => (active === true ? '200px' : '0px')};
    
    background-color: rgba(64, 64, 64, 0.5);
    color: white;
    
    border-radius: 4px;
    border: 1px solid white;
    transition: width 0.5s;
    
    font-size: 14px;
    
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    
    opacity: ${({ active }) => (active === true ? '1' : '0')};

    &:focus {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        color: white;
        cursor: pointer;
    }
    
    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 32px;
    width: 32px;

    cursor: pointer;
    
    background-color: transparent;
    
    border: 0;
    outline: 0;

    padding: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const Picture = styled.button`
    width: 32px;
    height: 32px;

    background: url(${({ src }) => src});
    background-size: contain;
    
    border: 0;
    
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 30px;
    right: 0px;
    
    width: 150px;
    
    background-color: black;
    padding: 15px;
  
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    
    ${Group} {
        margin-bottom: 10px;
        
        &:last-of-type {
          margin-bottom: 0;
        }
        
        ${Link} {
          cursor: pointer;
        }
        
        ${Picture} {
          cursor: default;
        }
    }
    
    button {
        margin-right: 10px;
    }
    
    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    
    margin-left: 20px;
    
    button {
        cursor: pointer;
    }
    
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;


export const PlayButton = styled.button`
    max-width: 130px;

    font-weight: bold;
    font-size: 20px;

    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    
    margin-top: 10px;
    padding: 10px 20px;
    
    border-radius: 5px;
    
    cursor: pointer;
    
    transition: background-color 0.5s ease;
    
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;
