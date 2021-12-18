import styled from 'styled-components';
import partners from '../../assets/partners.jpg';
import partnersMobile from '../../assets/partnersMobile.jpg';

export const PartnersContainer = styled.div`
  background-image: url(${partners});
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  height: 100%;
  color: #393939;
  font-family: 'DM Sans', sans-serif;

  h1 {
    font-family: 'DM Sans', sans-serif;
    padding-top: 2rem;
    padding-bottom: 3rem;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    background-image: url(${partnersMobile});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const PartnersImages = styled.div`
  display: flex;
  justify-content: space-evenly;

  h3 {
    padding-top: 0.8rem;
    font-weight: bold;
  }

  h4 {
    font-weight: lighter;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    padding-bottom: 0rem;
  }
`;

export const Informations = styled.div`
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;
`;
