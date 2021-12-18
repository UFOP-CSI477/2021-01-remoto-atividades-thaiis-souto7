import styled from 'styled-components';
import background from '../../assets/FundoLogin.jpg';
import backgroundMobile from '../../assets/FundoLoginMobile.jpg';

export const LoginContainer = styled.div`
  transform: scale(1.1);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 32.3rem;
  width: 76.8rem;
  color: #393939;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  @media (max-width: 768px) {
    margin: 0;
    background-image: url(${backgroundMobile});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const Divisor = styled.hr`
  height: 0.09rem;
  margin-bottom: 2.5rem;
  border: none;
  background-color: #c3c1cc;
`;

export const FormContainer = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 25rem;
  border-radius: 1rem;
  text-align: center;
  background-color: white;

  h1 {
    color: #010185;
    font-family: 'DM Sans', sans-serif;
    padding-bottom: 0.8rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: space-evenly;
  }

  h4 {
    font-family: 'DM Sans', sans-serif;
    font-weight: normal;
    font-size: 1rem;
    color: #393939;
  }

  @media (max-width: 768px) {
    width: 14rem;
    height: 24rem;
    padding: 1.5rem 2rem 2rem 2rem;

    h2 {
      font-size: 0.9rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonPers = styled.button`
  background-color: #183184;
  border-radius: 2rem;
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  transition: 0.5s;
  border: none;
  cursor: pointer;

  h4 {
    margin-top: 0rem;
    padding-top: 1rem;
    color: white;
    font-weight: normal;
    font-family: 'DM Sans', sans-serif;
  }

  &:hover {
    background-color: #318ada;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 10rem;

    h4 {
      padding-top: 1rem;
      font-size: 0.8rem;
    }
  }
`;

export const FormElement = styled.div`
  font-family: 'DM Sans', sans-serif;

  input {
    width: 15rem;
    height: 2.5rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border: solid;
    border-radius: 0.5rem;
    border-width: 0.1rem;

    @media (max-width: 768px) {
      align-items: center;
      width: 12rem;
    }
  }
`;
