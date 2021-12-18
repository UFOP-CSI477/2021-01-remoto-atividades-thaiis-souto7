import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 5rem;
  background-color: #c9cfe4;
  padding: 1rem 0rem 5rem 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-bottom: 22rem;
  }
`;

export const MessageFooter = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #7f7f7f;
  padding: 1rem 0rem 0rem 5rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.3rem 0rem 0rem 1rem;
  }
`;

export const CopyrightFooter = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #7f7f7f;
  padding: 1rem 0rem 0rem 5rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0rem 0rem 0rem 1rem;
  }
`;
