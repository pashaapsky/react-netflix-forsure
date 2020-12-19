import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 45px;
  margin: 0 auto;
  max-width: 1000px;
  flex-direction: column;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.a`
  font-size: 13px;
  color: #757575;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  
  text-decoration: none;
  text-transform: uppercase;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;