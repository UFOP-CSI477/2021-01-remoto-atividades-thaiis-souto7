import styled from 'styled-components';
import background from '../../assets/BackgroundAdm.png';

export const AdmContainer = styled.div`
  transform: scale(1.1);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 32.3rem;
  width: 76.9rem;
  color: #393939;
  padding-top: 5rem;
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
  height: 25rem;
  border-radius: 1rem;
  text-align: center;
  background-color: white;

  @media (max-width: 768px) {
    width: 15rem;
    height: 22rem;
    padding: 1.5rem 2rem 2rem 2rem;
  }
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

export const ButtonHeader = styled.div``;

export const HeaderAdm = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowAssociates = styled.div`
  margin-left: 0.4rem;

  table {
    #headerTable {
      border: none;
      margin: 0;
      background-color: #c2c2c2;
    }
    #cod {
      padding: 0.5rem 3rem 0.5rem 3rem;
    }
    #assoc {
      padding: 0.5rem 8rem 0.5rem 8rem;
    }
    #placa {
      padding: 0.5rem 4rem 0.5rem 4rem;
    }
    #icons {
      padding: 0.5rem 4rem 0.5rem 4rem;
    }

    #trow {
      border: none;
      margin: 0;
      background-color: #white;
    }

    #pencil {
      border: none;
      background-color: white;
      cursor: pointer;
    }

    #trash {
      border: none;
      background-color: white;
      cursor: pointer;
    }
  }
`;

export const HeaderTable = styled.div``;

// export const BodyTable = styled.div`
//   margin-right: 0.4rem;
//   border: 1px solid #c2c2c2;
//   #cod {
//     width: 8.5rem;
//     border: none;
//     padding: 0.5rem 1rem 0.5rem 1rem;
//   }
//   #assoc {
//     width: 24.8rem;
//     border: none;
//     padding: 0.5rem 1rem 0.5rem 1rem;
//   }
//   #placa {
//     width: 7.8rem;
//     border: none;
//     padding: 0.5rem 1rem 0.5rem 1rem;
//   }
//   #icons {
//     width: 8.7rem;
//     border: none;
//     padding: 0.5rem 1rem 0.5rem 1rem;
//   }

//   #pencil {
//     border: none;
//     background-color: white;
//     cursor: pointer;
//   }
// `;

export const ButtonPers = styled.button`
  background-color: #183184;
  border-radius: 2rem;
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  transition: 0.5s;
  border: none;
  cursor: pointer;

  h5 {
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
