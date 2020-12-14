import styled from "styled-components/macro";

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items:center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    
    img {
        z-index: 2;
    }
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
        align-items: center;
    }
`;

export const Player = styled.div`
    width: 100%;
    height: 100%;
    
    max-height: 100%;
    max-width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    
    ${({videoMark}) => (
        videoMark == 1 ? 
            `max-width: 73%; max-height: 54%; top: 48%; left: 49.5%;` 
            : 
            `max-width: 63%; max-height: 47%; top: 34%; left: 50%;`
        )}
    
    video {
        width: 100%;
        height: 100%;
    }

`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;