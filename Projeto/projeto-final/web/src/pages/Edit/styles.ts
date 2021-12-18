import styled from 'styled-components';
import background from '../../assets/BackgroundAdm.png';

export const EditContainer = styled.div`
  transform: scale(1.1);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 33.8rem;
  width: 76.9rem;
  color: #393939;
  padding-top: 3.5rem;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  justify-content: center;
`;

export const Divisor = styled.hr`
  height: 0.09rem;
  border: none;
  background-color: #c3c1cc;
`;

export const DataTable = styled.div`
  padding: 1rem 2rem 0rem 2rem;
  width: 50rem;
  height: 30rem;
  border-radius: 1rem;
  text-align: center;
  background-color: white;

  @media (max-width: 768px) {
    width: 15rem;
    height: 22rem;
    padding: 1.5rem 2rem 2rem 2rem;
  }
`;

export const HeaderEdit = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextHeader = styled.div`
  h2 {
    color: #010185;
    font-family: 'DM Sans', sans-serif;
    font-size: 2rem;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditFormBorder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #c3c1cc;
  border-radius: 0.5rem;
  margin: 0.8rem 0rem 0.8rem 0rem;
  padding-bottom: 0.5rem;
`;

export const FormElement = styled.div`
  font-family: 'DM Sans', sans-serif;

  input {
    width: 14rem;
    height: 1.5rem;
    margin: 0.5rem 0.5rem 0.2rem 0.5rem;
    padding-left: 1rem;
    border: 1px solid #c3c1cc;
    border-radius: 0.5rem;
    border-width: 0.1rem;
  }
`;

export const BodyButton = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: right;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonPers = styled.button`
  background-color: #183184;
  border-radius: 2rem;
  width: 10rem;
  height: 2rem;
  font-weight: bold;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  margin-left: 1rem;

  h4 {
    color: white;
    font-weight: normal;
    font-family: 'DM Sans', sans-serif;
  }

  &:hover {
    background-color: #318ada;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    width: 18rem;
    margin-left: 3rem;
  }
`;
