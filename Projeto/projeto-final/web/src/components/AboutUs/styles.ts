import styled from 'styled-components';
import banner from '../../assets/banner1.png';
import bannerMobile from '../../assets/bannerMobile.png';

export const AboutUsContainer = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 38rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    text-align: left;
    color: #393939;
    font-weight: bold;
    font-size: 2.5rem;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 2rem;
  }

  text {
    text-align: left;
    color: #7f7f7f;
    font-size: 0.9rem;
    font-weight: lighter;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    background-image: url(${bannerMobile});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 8rem;

    h1 {
      padding-top: 8rem;
      color: white;
      margin: 25rem 0rem 6rem -1rem;
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
    }

    text {
      margin-left: -1rem;
      font-size: 0.9rem;
      font-weight: lighter;
    }
  }
`;

export const AboutUsText = styled.div`
  margin: 0rem 3rem 0rem 5rem;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
`;
