import styled from 'styled-components';

export const PlanningContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  width: 100%;
  height: 100%;
  color: #393939;
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 768px) {
    padding-top: 33rem;
  }
`;

export const CellDivide = styled.hr`
  height: 0.09rem;
  margin-bottom: 1rem;
  border: none;
  background-color: #c4d8dc;
`;

export const PlanningCardsContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`;

export const CardsContainer = styled.div`
  padding: 3rem;
  width: 20rem;
  height: 27rem;
  border: 1px solid #c4d8dc;
  border-radius: 1rem;
  transition: 0.5s;
  text-align: center;

  h2 {
    font-family: 'DM Sans', sans-serif;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
  }

  h5 {
    text-align: left;
    padding-top: 0.2rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: normal;
    font-size: 1rem;
    color: #7f7f7f;
  }

  &:hover {
    color: white;
    background-color: #2076d1;
    opacity: 0.9;

    h5 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 22rem;
    margin-bottom: 2rem;
    padding: 1.5rem 2rem 2rem 2rem;

    h2 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`;
