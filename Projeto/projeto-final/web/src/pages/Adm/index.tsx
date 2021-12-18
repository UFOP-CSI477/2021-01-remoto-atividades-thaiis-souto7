import { useHistory } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

import { useCallback, useEffect, useState } from 'react';
import {
  AdmContainer,
  HeaderAdm,
  TextHeader,
  ButtonHeader,
  ButtonPers,
  Divisor,
  ShowAssociates,
  DataTable,
} from './styles';
import api from '../../services/api';

interface IAssociate {
  id: string;
  name: string;
  cpf: string;
  date_of_birth: string;
  phone_number: number;
  celphone_number: number;
  email: string;
  chassi: string;
  renavam: string;
  license_plate: string;
  model: string;
  fuel: string;
  year_of_fabrication: number;
  cep: string;
  adress: string;
  city: string;
  state: string;
}

const Adm: React.FC = () => {
  const history = useHistory();

  const [associates, setAssociates] = useState<IAssociate[]>(
    [] as IAssociate[],
  );

  useEffect(() => {
    api.get('/associates').then(response => {
      setAssociates(response.data);
    });
  }, []);

  const handle = useCallback(() => {
    history.push('/Create');
  }, [history]);

  const handleEdit = useCallback(() => {
    history.push('/Edit');
  }, [history]);

  const handleDelete = useCallback(
    async (id: string) => {
      await api.delete(`/associates/${id}`);
      // const index = associates.findIndex(associate => associate.id === id);
      // const updated = associates;
      // updated.splice(1, index);
      // setAssociates(updated);
      history.push('/adm');
    },
    [history],
  );

  return (
    <AdmContainer id="Adm">
      <DataTable>
        <HeaderAdm>
          <TextHeader>
            <h2>ASSOCIADOS</h2>
          </TextHeader>
          <ButtonHeader>
            <ButtonPers type="button" onClick={handle}>
              <h5>Novo Associado</h5>
            </ButtonPers>
          </ButtonHeader>
        </HeaderAdm>

        <Divisor />

        <ShowAssociates>
          <table>
            <thead>
              <tr id="headerTable">
                <td id="cod">Código</td>
                <td id="assoc">Associado</td>
                <td id="placa">Placa</td>
                <td id="icons"> </td>
              </tr>
            </thead>
            <tbody>
              {associates &&
                associates.map(associate => (
                  <tr id="trow">
                    <td id="cod">{associate.id}</td>
                    <td id="assoc">{associate.name}</td>
                    <td id="placa">{associate.license_plate}</td>
                    <td id="icons">
                      <button type="button" onClick={handleEdit} id="pencil">
                        <FaPencilAlt color="#183184" size="1rem" />
                      </button>
                      <button
                        type="button"
                        id="trash"
                        onClick={() => handleDelete(associate.id)}
                      >
                        <FaTrash color="#183184" size="1rem" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ShowAssociates>
      </DataTable>
    </AdmContainer>
  );
};
export default Adm;
